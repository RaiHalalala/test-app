import React,{ useState } from 'react';
import {NavLink} from "react-router-dom";
import * as axios from "axios";

import './app-body.css';

const API = process.env.REACT_APP_INFO_API;
let firstLoad = true;
let activeform = false;

const Massages = ({state,setUsers,setMassages}) => {
  // debugger
  if(state.usersApp.length === 0 && firstLoad) {
    // debugger
    axios.get(`http://localhost:3005/usersApp`).then(response => {
      // debugger;
      setUsers(response.data);
    });
    
    axios.get(`http://localhost:3005/dialogsApp`).then(response => {
      setMassages(response.data);
    });
    firstLoad = false;
  }

  const [activeform, setActiveForm] = useState(false)
  // debugger;
  const users = state.usersApp.map(({name, avatar, href, idUser, hideData}) => {
    let massageUser 
    state.dialogsApp.forEach(massageDataUser => {

      massageDataUser.forEach(({idDialog, massages, hideData}) => {
        if(idDialog === idUser && !activeform){
          massageUser = massages;
        } else if (idDialog === idUser && activeform){
          massageUser = (
            <form className="massage-item-form">
              <input 
                className="massage-item-input"
                value={massages}/>
              <button className="massage-item-btn btn-inert">send</button>
            </form>
          )
        }
      })
    })

  const showAvatar = (e) => {
    const imgSrc = e.target.currentSrc;
    // debugger;
    return (
      <div>
        <img src={imgSrc} className="img-big"/>
        <div className="back-img"/>
      </div>
    )
  }

  const onChangeMassage = () => {
    setActiveForm(true)
  }
  
    // debugger;
  if (!hideData) {
    return (
      <div className="userContainer">
        <img 
          src={avatar} 
          className="img-size"
          onClick={showAvatar}/>
        <div className="userInfo">
          <NavLink to="/body/dialog">
              {name}
          </NavLink>
          <div 
            className="massage-item"
            onClick={onChangeMassage}>
            {massageUser}
            {/* <form className="massage-item-form">
              <input className="massage-item-input"/>
              <button className="massage-item-btn btn-inert">send</button>
            </form> */}
          </div>
          
        </div>
      
      </div>)
    }   
  })

    return(
      <div className="body">
        <div>
          {users}
        </div>
        <div>
        </div>
      </div>
    )
}

export default Massages;


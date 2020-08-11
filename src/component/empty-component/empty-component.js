import React, { createRef } from 'react';
import "./empty-component.css";
import { Redirect } from 'react-router-dom';

function EmptyConponent({state,updateInputLogin,updateInputPassword,sendForm}) {
  let newTextLogin = React.createRef();
  let newTextPassword = React.createRef()

  const onUpdateInputLogin = () => {
    let login = newTextLogin.current.value;
    // debugger;
    updateInputLogin(login)
  }
  const onUpdateInputPassword = () => {
    let password = newTextPassword.current.value;
    updateInputPassword(password)
  }

  const onSendForm = (e) => {
    // const link = "http://localhost:3001/"
    // e.preventDefault();
    sendForm();
    
  }
  if (state.register.linkUserProfile) {
    return <Redirect to={"/user"}/>
  }

  // debugger;
  return(
    
    <div className="empty-container">
      <h2>Entry</h2>
      <div>
        <h4>Login</h4>
        <form className="form-register" >
          <input 
            placeholder="login" 
            className="input-register"
            onChange={onUpdateInputLogin}
            ref={newTextLogin}
            value={state.register.updateInputLogin}/>
        </form>
        <h4>Password</h4>
        <form>
          <input 
            placeholder="password" 
            className="input-register"
            onChange={onUpdateInputPassword}
            ref={newTextPassword}
            value={state.register.updateInputPassword}/>
        </form>
      </div>
      <div>
        
            <button 
              className="button-add-form"
              onClick={onSendForm}
              >Send</button>
        
      </div>
    </div>
  )
}

export default EmptyConponent;
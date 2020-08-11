import React from 'react';
import "./header-nav.css";
import img from "../../redux/img/icon.svg"

function HeaderNav({state}) {
  return(
    <div className="header">
      <img src={img} className="img-icon"/>
      <div className="logo-container">
        <h1 className="logo-icon-name"> 柴犬</h1>
        <p className="logo-name">Сиба-ину</p>
      </div>
      
    </div>
  )
}

export default HeaderNav;
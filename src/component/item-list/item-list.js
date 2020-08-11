import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

import './item-list.css'

function ItemList ({state}) {
  // debugger;
  const element = state.dataInterface.map(({name, href, hideData}) => {
      if (!hideData) {
          return (
            <li key={name} className="item-link__block">
              <NavLink to={href} className="item-link">{name}</NavLink>
              <div className="item-link__animation"></div>
            </li>
          )
      }
  })

  return(
      <ul className="item-list">
          {element}
      </ul>
  )
}

export default ItemList;
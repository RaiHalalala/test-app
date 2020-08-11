import React from 'react';
import ItemListContainer from "../item-list/item-list-container";
import { Route, Switch, Router } from 'react-router-dom';
import ProfileContainer from "../app-body-profile/app-body-profile-container";
import MassagesContainer from "../app-body/app-body-container"
import "./main-component.css"

function MainConponent() {
  const profile = () => <ProfileContainer/>
  const massages = () => <MassagesContainer/>
  return(
    <div className="body-composition">
      <ItemListContainer/>
      <div>
      <Switch>
        <Route exact path="/user/" component={profile}/>
        <Route exact path="/user/news" component={profile}/>
        <Route exact path="/user/massages" component={massages}/>
      </Switch>
      </div>
    </div>
  )
}

export default MainConponent;
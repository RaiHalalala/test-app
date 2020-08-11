import React, { Component } from "react";
import HeaderNavContainer from "../component/header-nav/header-nav-container"
import "./layout.css"

class LayoutMain extends Component {
  constructor(props){
    super()
  }
  render() {
    return (
      <>
        <div className="header-app">
          <div className="container">
            <HeaderNavContainer/>
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
        <div className="footer-app">
          <div className="container">
            <div className="footer"></div>
          </div>
        </div>
      </>
    )
  }
}

export default LayoutMain;
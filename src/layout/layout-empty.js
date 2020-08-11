import React, { Component } from "react";
import "./layout.css"

class LayoutEmpty extends Component {
  render() {
    return (
      <div className="layout-empty-container">
        {this.props.children}
        <div className="back-app"></div>
      </div>
    )
  }
}

export default LayoutEmpty;
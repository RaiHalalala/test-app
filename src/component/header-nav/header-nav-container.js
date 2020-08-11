import HeaderNav from "./header-nav"
const { connect } = require("react-redux");

const mapStorToProps = (state) => {
  return {
    state: state.nav
  }
}

let HeaderNavContainer = connect(mapStorToProps)(HeaderNav);

export default HeaderNavContainer;
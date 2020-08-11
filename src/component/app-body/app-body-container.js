import Massages from "./app-body";
import {setUsersActionCreator,setMassagesActionCreator} from "../../redux/reducer-massages"
const { connect } = require("react-redux");

const mapStoreToProps = (state) => {
  return{
    state: state.massages
  }
  // debugger;
}

const mapDispatchToProps = (dispatch) => {
  return{
    setUsers:(data) => {
      dispatch(setUsersActionCreator(data))
    },
    setMassages: (data) => {
      dispatch(setMassagesActionCreator(data))
    }
  }
}

let MassagesContainer = connect(mapStoreToProps, mapDispatchToProps)(Massages);
export default MassagesContainer;
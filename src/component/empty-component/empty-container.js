import {updateLoginActionCreater} from "../../redux/reducer-register";
import {updatePasswordActionCreater} from "../../redux/reducer-register";
import {registerUserActionCreater} from "../../redux/reducer-register";
import { connect } from "react-redux";
import EmptyConponent from "./empty-component"

let mapStoreToProps = (state) => {
  return {
    state: state
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateInputLogin: (login) => {
      dispatch(updateLoginActionCreater(login))
    },
    updateInputPassword: (password) => {
      dispatch(updatePasswordActionCreater(password))
    },
    sendForm: () => {
      dispatch(registerUserActionCreater())
    }
  }
}

const EmptyContainer =  connect(mapStoreToProps, mapDispatchToProps)(EmptyConponent);

export default EmptyContainer;
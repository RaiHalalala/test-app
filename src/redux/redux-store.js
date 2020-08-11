import reduserProfile from "./reducer-profile";
import reduserItemList from "./reduser-item-list";
import reduserRegisterUser from "./reducer-register";
import reducerHeaderNav from "./reducer-nav";
import reducerMassages from "./reducer-massages";
import { combineReducers, createStore } from "redux";

let reduser = combineReducers({
  nav: reducerHeaderNav,
  ItemList: reduserItemList,
  profile: reduserProfile,
  register: reduserRegisterUser,
  massages: reducerMassages
})

let store = createStore(reduser);

export default store;
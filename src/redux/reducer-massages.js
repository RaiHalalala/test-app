const SET_USERS = 'SET-USERS';
const SET_MASSAGE = 'SET-MASSAGE';

const initinalMassages = {
  usersApp: [],
  dialogsApp: [],
  newMassageBody: ""
}

const reducerMassages = (state=initinalMassages, action) => {
  switch(action.type) {
    case SET_USERS :{
      let newState = {...state};
      newState.usersApp = {...state.usersApp}
      // debugger;
      newState.usersApp = action.setUsers
      return newState}
    
    case SET_MASSAGE :{
      let newState = {...state};
      newState.dialogsApp = {...state.dialogsApp}
      // debugger;
      newState.dialogsApp = action.setMassages
      return newState}
    default:
      return state
  }
}

export const setUsersActionCreator = (user) => {
  // debugger
  return {
    type: SET_USERS,
    setUsers: user
  }
}

export const setMassagesActionCreator = (massages) => {
  return {
    type: SET_MASSAGE,
    setMassages: massages
  }
}

export default reducerMassages;
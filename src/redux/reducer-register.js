

const ENTRY_PROFILE = "ENTRY-PROFILE";
const UPDATE_INPUT_LOGIN = "UPDATE-INPUT-LOGIN";
const UPDATE_INPUT_PASSWORD = "UPDATE-INPUT-PASSWORD";

const initinalRegisterUserData = {
  dataUser: {
    login: "2222",
    password: 2222
  },
  updateInputLogin: "",
  updateInputPassword: "",
  linkUserProfile: false
}

const reduserRegisterUser = (state=initinalRegisterUserData, action) => {
  // debugger;
  switch (action.type) {
    case UPDATE_INPUT_LOGIN :{
      
      let newState = {...state};
      newState.updateInputLogin = action.loginText;
      return newState;
      // state.updateInputLogin = action.loginText; 
    }
    case UPDATE_INPUT_PASSWORD :{
      
      let newState = {...state};
      newState.updateInputPassword = action.passwordText;
      return newState;
      // debugger;
      // state.updateInputPassword = action.passwordText;
    }
    case ENTRY_PROFILE :{
      let newState = {...state}
      if (newState.updateInputLogin === newState.dataUser.login && 
        +(newState.updateInputPassword) === newState.dataUser.password) {
          // debugger;
          
          newState.linkUserProfile = true 
        } 
        // debugger;
        return newState
      // debugger;
        // state.linkUserProfile = true;
        // debugger;
        

    }
    default:
      return state

  }
};


export let updateLoginActionCreater = (login) => {
  // debugger;
  return {
    type: UPDATE_INPUT_LOGIN,
    loginText: login
  }
}
export let updatePasswordActionCreater = (password) => {
  return {
    type: UPDATE_INPUT_PASSWORD,
    passwordText: password
  }
}
export let registerUserActionCreater = () => {
  return {
    type: ENTRY_PROFILE
  }
}

export default reduserRegisterUser;
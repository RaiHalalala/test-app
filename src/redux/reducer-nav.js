

const NAV = 'NAV';

let initinalList = {
  icon: "../img/icon.svg"
}

const reduserItemList = (state=initinalList, action) => {
  switch (action.type) {
    case NAV:
      return state
    default:
      return state
  }
 
}



export default reduserItemList;
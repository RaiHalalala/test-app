

const VIEW_MENY = 'VIEW-MENY';

let initinalList = {
  dataInterface: [
    { name: "My profile", href: "/user/", hideData: false },
    { name: "News", href: "/user/news", hideData: false },
    { name: "Massages", href: "/user/massages", hideData: false }
  ]
}

const reduserItemList = (state=initinalList, action) => {
  switch (action.type) {
    case VIEW_MENY:
      return state
    default:
      return state
  }
 
}



export default reduserItemList;
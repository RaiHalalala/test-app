// Action-type
const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MASSAGE = 'UPDATE-NEW-MASSAGE';
const SEND_MASSAGE = 'SEND-MASSAGE'

let store = {
  _callSubscriber () {
  },
  _state: {
    dataInterface: [
      { name: "Login", href: "/login", hideData: false },
      { name: "Profile", href: "/profile", hideData: true },
      { name: "Dialogs", href: "/body", hideData: false },
      { name: "News", href: "/news", hideData: false },
    ],
    dataRegistration: {
      username: "Admin",
      password: "12345",
    },
    users: {
      usersApp: [
        {
          name: "Dima",
          avatar: "https://sun9-23.userapi.com/c635103/v635103221/36190/NojvqQpPegs.jpg",
          href: "/1",
          key: "1",
          idUser: 1,
          hideData: false,
        },
        {
          name: "Raihan",
          avatar: "https://sun9-23.userapi.com/c635103/v635103221/36190/NojvqQpPegs.jpg",
          href: "/2",
          key: "2",
          idUser: 2,
          hideData: false,
        },
        {
          name: "Diana",
          avatar: "https://sun9-23.userapi.com/c635103/v635103221/36190/NojvqQpPegs.jpg",
          href: "/3",
          key: "3",
          idUser: 3,
          hideData: false,
        },
        {
          name: "Igosha",
          avatar: "https://sun9-23.userapi.com/c635103/v635103221/36190/NojvqQpPegs.jpg",
          href: "/4",
          key: "4",
          idUser: 4,
          hideData: false,
        },
        {
          name: "Polina",
          avatar: "https://sun9-23.userapi.com/c635103/v635103221/36190/NojvqQpPegs.jpg",
          href: "/5",
          key: "5",
          idUser: 5,
          hideData: false,
        }
      ],
      dialogsApp: [
        [{ key: 1,idDialog: 1, massages: "I love youuu"},{ key: 1,idDialog: 1, massages: "I love youuu"}],
        [{ key: 3,idDialog: 2, massages: "Hehe"}],
        [{ key: 4,idDialog: 3, massages: "Yo"}],
        [{ key: 5,idDialog: 4, massages: "Are you go in the park?"}],
        [{ key: 6,idDialog: 5, massages: "I`m stupid"}],
      ],
      newMassageBody: ""
    },
    profilePage: {
      posts: [
        { massage: "Hello, how are you?", key: 1 },
        { massage: "Piska", key: 2 },
        { massage: "How old are you?", key: 3 },
        { massage: "Hello, how are you?", key: 4 },
        { massage: "Hello, how are you?", key: 5 },
      ],
      newPostText: "",
    },
    picters: {
      previwUser:
        "https://sun7-7.userapi.com/1N-sf69OLDOhImWsIiXxHNdxRIuikzkVoycNRg/IAJBlDIJl_c.jpg",
    },
  },
  getState() {
    return this._state
  },
  _addPost () {
    debugger;
    let newPost = {
      massage: this._state.profilePage.newPostText,
      key: 7,
    };
    // debugger;
    this._state.profilePage.posts.push(newPost);
    this._callSubscriber(this._state);
  },
  _updateNewPostText (newText) {
    debugger;
    this._state.profilePage.newPostText = newText;
   
    this._callSubscriber(this._state);
  },
  _updateNewMassage (newMassage) {
    this._state.users.newMassageBody = newMassage;

    this._callSubscriber(this._state);
  },

  _sendMassage () {
    let body =  this._state.users.newMassageBody;
    let newMassage = {
      key: 7,
      massages: body,
      hideData: false 
    }
    this._state.users.dialogsApp.push(newMassage)

  },
  
  subcribe (observer) {
    this._callSubscriber = observer;
  },
  dispatch (action) {
    if (action.type === ADD_POST) {
      this._addPost()
    } else if (action.type === UPDATE_POST) {
      this._updateNewPostText(action.newText)
    } else if (action.type === UPDATE_NEW_MASSAGE) {
      this._updateNewMassage(action.body)
    } else if (action.type === SEND_MASSAGE) {
      this._sendMassage()
    }
  }
}

// Action-creator
export let addNewPostActionCreator = () => {
  return {
      type: ADD_POST
  }
}

export let onPostChangeActionCreator = (text) => {
  return {
      type: UPDATE_POST,
      newText: text
  }
}

export let onNewMassageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MASSAGE,
    newMassage: text
  }
}

export let addNewMassageActionCreator = () => {
  return {
    type: SEND_MASSAGE,
  }
}



export default store;

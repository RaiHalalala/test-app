const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-NEW-POST-TEXT';
const SET_POSTS = 'SET-POSTS'

const initnalData = {
  posts: [],
  newPostText: "",
  picters: {
    previwUser:
      "https://sun7-7.userapi.com/1N-sf69OLDOhImWsIiXxHNdxRIuikzkVoycNRg/IAJBlDIJl_c.jpg",
  }
}

const reduserProfile = (state=initnalData, action) => {
  switch(action.type) {
    case SET_POSTS: {
      let newState = {...state};
      newState.posts = [...state.posts];
      newState.posts = action.newPosts;
      return newState
    }
    case ADD_POST:
    {  let newState = {...state}
      let newPost = {
        massage: newState.newPostText,
        key: 7,
      };
      newState.posts.push(newPost);
      return newState;}
    
    case UPDATE_POST:
      {let newState = {...state}
      newState.newPostText = action.newText;
      return newState;}

    default:
      return state
  }
}

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

export let setPostsActionCreator = (posts) => {
  return {
    type: SET_POSTS,
    newPosts: posts
  }
}

export default reduserProfile;

  // dispatch (action) {
  //   if (action.type === ADD_POST) {
  //     this._addPost()
  //   } else if (action.type === UPDATE_POST) {
  //     this._updateNewPostText(action.newText)
  //   } else if (action.type === UPDATE_NEW_MASSAGE) {
  //     this._updateNewMassage(action.body)
  //   } else if (action.type === SEND_MASSAGE) {
  //     this._sendMassage()
  //   }
  // }
import React from 'react';
import * as axios from "axios";

import './app-body-profile.css';

let firstLoad = true;


const Profile = ({state, postChange, addNewPost, setPosts}) => {
  if(state.posts.length === 0 ){
      axios.get(`http://localhost:3005/posts`).then(response => {
          setPosts(response.data)
      })
  }
  const previw = state.picters.previwUser;
  const postsElements = state.posts.map(({massage, key}) => {
      return(
          <div className="post-item">
              {massage}
          </div>
      )
  });

  let newPostElement = React.createRef();

  let onAddNewPost = () => {
    // addNewPost();
    // debugger;
    axios.post(`http://localhost:3005/posts`,{
      massage: state.newPostText,
      key: 7
    }).then(() => {
      axios.get(`http://localhost:3005/posts`).then(response => {
        debugger
          setPosts(response.data)
      });
    });
    state.newPostText = ""
  }

  let onPostChange = () => {
      let text = newPostElement.current.value;
      postChange(text);
  };

  return(
      <div className="profile">
          <div className="preview">
              <img  src={previw} />
          </div>
          <div className="profile-content">
              {postsElements}
              <div className="form">
                    <div className="form-group">
                      <textarea
                          onChange={onPostChange}
                          ref={newPostElement}
                          type="text" 
                          id="dynamic-label-input" 
                          className="textarea-style"
                          placeholder="Enter some text"
                          value={state.newPostText}/>
                      <label for="dynamic-label-input"></label>
                  </div>
                  <button 
                      className="btn-inert"
                      onClick={onAddNewPost}>to send
                  </button>
              </div>
          </div>

      </div>
  )
}

export default Profile;
import { addNewPostActionCreator, setPostsActionCreator } from '../../redux/reducer-profile';
import {onPostChangeActionCreator} from '../../redux/reducer-profile';
import { connect } from 'react-redux';
import Profile from './app-body-profile';

let mapStoreToProps = (state) => {
  return {
    state: state.profile
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    postChange: (text) => {
      dispatch(onPostChangeActionCreator(text))
    },
    addNewPost: () => {
      dispatch(addNewPostActionCreator())
    },
    setPosts: (data) => {
      dispatch(setPostsActionCreator(data))
    }
  }
}

const ProfileContainer = connect(mapStoreToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
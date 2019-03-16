import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  posts: [],
  post: {},
  loading: false
}

const fetchPostsStart = (state, action) => {
  return updateObject(state, {loading: true});
}

const fetchPostsSuccess = (state, action) => {
  return updateObject(state, {
    posts: action.posts,
    loading: false
  });
}

const fetchPostsFail = (state, action) => {
  return updateObject(state, {loading: false});
}

const removePostsStart = (state, action) => {
  return updateObject(state, {loading: true});
}

const removePostSuccess = (state, action) => {
  const updatedPosts = state.posts.filter(post => post.id !== action.postId);
  return updateObject(state, {
    loading: false,
    posts: updatedPosts
  });
}

const removePostFail = (state, action) => {
  return updateObject(state, {loading: false});
}

const addPostStart = (state, action) => {
  return updateObject(state, {loading: true});
}

const addPostSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    posts: state.posts.concat(action.newPost)
  });
}

const addPostFail = (state, action) => {
  return updateObject(state, {loading: false});
}

const updatePostStart = (state, action) => {
  return updateObject(state, {loading: true});
}

const updatePostSuccess = (state, action) => {
  let newPosts = state.posts.map(post => {
    return (post.id === action.editedPost.id) ? action.editedPost : post;
  });

  return updateObject(state, {
    posts: newPosts,
    loading: false
  });
}

const updatePostFail = (state, action) => {
  return updateObject(state, {loading: false});
}

const fetchPostStart = (state, action) => {
  return updateObject(state, {loading: true});
}

const fetchPostSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    post: action.post
  });
}

const fetchPostFail = (state, action) => {
  return updateObject(state, {loading: false});
}

export const FETCH_POST_START = 'FETCH_POST_START';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FAIL = 'FETCH_POST_FAIL';
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_START: return fetchPostsStart(state, action);
    case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action);
    case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action);
    case actionTypes.REMOVE_POST_START: return removePostsStart(state, action);
    case actionTypes.REMOVE_POST_SUCCESS: return removePostSuccess(state, action);
    case actionTypes.REMOVE_POST_FAIL: return removePostFail(state, action);
    case actionTypes.ADD_POST_START: return addPostStart(state, action);
    case actionTypes.ADD_POST_SUCCESS: return addPostSuccess(state, action);
    case actionTypes.ADD_POST_FAIL: return addPostFail(state, action);
    case actionTypes.UPDATE_POST_START: return updatePostStart(state, action);
    case actionTypes.UPDATE_POST_SUCCESS: return updatePostSuccess(state, action);
    case actionTypes.UPDATE_POST_FAIL: return updatePostFail(state, action);
    case actionTypes.FETCH_POST_START: return fetchPostStart(state, action);
    case actionTypes.FETCH_POST_SUCCESS: return fetchPostSuccess(state, action);
    case actionTypes.FETCH_POST_FAIL: return fetchPostFail(state, action);
    default: return state;
  }
}

export default reducer;

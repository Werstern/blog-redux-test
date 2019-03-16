import * as actionTypes from './actionTypes';
import axios from '../../axios-posts-base';

export const fetchPostSuccess = (post) => {
  return {
    type: actionTypes.FETCH_POST_SUCCESS,
    post: post
  };
};

export const fetchPostFail = (error) => {
  return {
    type: actionTypes.FETCH_POST_FAIL,
    error: error
  };
};

export const fetchPostStart = () => {
  return {
    type: actionTypes.FETCH_POST_START
  };
};

export const fetchPost = (post) => {
  return dispatch => {
    dispatch(fetchPostStart());
    axios.get('/posts/' + postId + '?_embed=comments')
      .then(res => {
        dispatch(fetchPostSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchPostFail(err));
      });
  };
};

export const updatePostSuccess = (editedPost) => {
  return {
    type: actionTypes.UPDATE_POST_SUCCESS,
    editedPost: editedPost
  };
};

export const updatePostFail = (error) => {
  return {
    type: actionTypes.UPDATE_POST_FAIL,
    error: error
  };
};

export const updatePostStart = () => {
  return {
    type: actionTypes.UPDATE_POST_START
  };
};

export const updatePost = (postId) => {
  return dispatch => {
    dispatch(updatePostStart());
    axios.put('/posts/' + postId)
      .then(res => {
        dispatch(updatePostSuccess(res.data));
      })
      .catch(err => {
        dispatch(updatePostFail(err));
      });
  };
};

export const removePostSuccess = (postId) => {
  return {
    type: actionTypes.REMOVE_POST_SUCCESS,
    postId: postId
  };
};

export const removePostFail = (error) => {
  return {
    type: actionTypes.REMOVE_POST_FAIL,
    error: error
  };
};

export const removePostStart = () => {
  return {
    type: actionTypes.REMOVE_POST_START
  };
};

export const removePost = (postId) => {
  return dispatch => {
    dispatch(removePostStart());
    axios.delete('/posts/' + postId)
      .then(res => {
        dispatch(removePostSuccess(postId));
      })
      .catch(err => {
        dispatch(removePostFail(err));
      });
  };
};

export const addPostSuccess = (newPost) => {
  return {
    type: actionTypes.ADD_POST_SUCCESS,
    newPost: newPost
  };
};

export const addPostFail = (error) => {
  return {
    type: actionTypes.ADD_POST_FAIL,
    error: error
  };
};

export const addPostStart = () => {
  return {
    type: actionTypes.ADD_POST_START
  };
};

export const addPost = (postData) => {
  return dispatch => {
    dispatch(addPostStart());
    axios.post('/posts', postData)
      .then(response => {
        dispatch(addPostSuccess(response.data));
      })
      .catch(err => {
        dispatch(addPostFail(err));
      });
  };
};

export const fetchPostsSuccess = (posts) => {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: posts
  };
};

export const fetchPostsFail = (error) => {
  return {
    type: actionTypes.FETCH_POSTS_FAIL,
    error: error
  };
};

export const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START
  };
};

export const fetchPosts = () => {
  return dispatch => {
    dispatch(fetchPostsStart());
    axios.get('/posts')
      .then(res => {
        dispatch(fetchPostsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchPostsFail(err));
      });
  };
};

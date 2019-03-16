import * as actionTypes from './actionTypes';
import axios from '../../axios-posts-base';

export const ADD_COMMENT_START = 'ADD_COMMENT_START';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAIL = 'ADD_COMMENT_FAIL';

export const addCommentSuccess = (newComment) => {
  return {
    type: actionTypes.ADD_COMMENT_SUCCESS,
    newComment: newComment
  };
};

export const addCommentFail = (error) => {
  return {
    type: actionTypes.ADD_COMMENT_FAIL,
    error: error
  };
};

export const addCommentStart = () => {
  return {
    type: actionTypes.ADD_COMMENT_START
  };
};

export const addComment = (comment) => {
  return dispatch => {
    dispatch(addCommentStart());
    axios.post('/comments/', comment)
      .then(res => {
        dispatch(addCommentSuccess(res.data));
      })
      .catch(err => {
        dispatch(addCommentFail(err));
      });
  };
};

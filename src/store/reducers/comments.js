import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  comments: [],
  loading: false
}

const addCommentStart = (state, action) => {
  return updateObject(state, {loading: true});
}

const addCommentSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    comments: state.comments.concat(action.newComment)
  });
}

const addCommentFail = (state, action) => {
  return updateObject(state, {loading: false});
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT_START: return addCommentStart(state, action);
    case actionTypes.ADD_COMMENT_SUCCESS: return addCommentSuccess(state, action);
    case actionTypes.ADD_COMMENT_FAIL: return addCommentFail(state, action);
    default: return state;
  }
}

export default reducer;

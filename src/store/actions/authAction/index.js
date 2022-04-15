import {
  ISUSERLOGIN,
  ISUSERLOGOUT,
  TEMPORARY_USER_ID,
  GET_USER_PROFILE,
  GET_USER_SOCIAL_PROFILE,
  GET_BEARER_TOKEN,
} from '../../constants';

export function validateUserLogin() {
  return async dispatch => {
    dispatch({type: ISUSERLOGIN});
  };
}
export function validateUserLogOut() {
  return async dispatch => {
    dispatch({type: ISUSERLOGOUT});
  };
}
export function saveTemporaryUserId(user_id) {
  return async dispatch => {
    dispatch({type: TEMPORARY_USER_ID, payload: user_id});
  };
}
export function saveUserProfile(user) {
  return async dispatch => {
    dispatch({type: GET_USER_PROFILE, payload: user});
  };
}
export function saveSocialUserProfile(user) {
  return async dispatch => {
    dispatch({type: GET_USER_SOCIAL_PROFILE, payload: user});
  };
}
export function saveBearerToken(token) {
  return async dispatch => {
    dispatch({type: GET_BEARER_TOKEN, payload: token});
  };
}

import {ISUSERLOGIN} from '../../constants';

export function validateUserLogin() {
  return async dispatch => {
    dispatch({type: ISUSERLOGIN});
  };
}

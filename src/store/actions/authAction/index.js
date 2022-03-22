import {ISUSERLOGIN} from '../../constants';

export function validateUserLogin(bol) {
  return async dispatch => {
    dispatch({type: ISUSERLOGIN, payload: bol});
  };
}

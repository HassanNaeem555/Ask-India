import {ISUSERLOGIN} from '../../constants';

const INITIAL_STATE = {
  isUserLogin: false,
  user: [],
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case ISUSERLOGIN:
      return {
        ...states,
        isUserLogin: !states.isUserLogin,
      };
    default:
      return states;
  }
};

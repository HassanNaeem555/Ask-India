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
        isUserLogin: action.payload,
      };
    default:
      return states;
  }
};

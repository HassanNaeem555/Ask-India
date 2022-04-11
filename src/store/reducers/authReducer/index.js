import {
  ISUSERLOGIN,
  TEMPORARY_USER_ID,
  GET_USER_PROFILE,
  GET_BEARER_TOKEN,
} from '../../constants';

const INITIAL_STATE = {
  isUserLogin: false,
  user: null,
  temporaryUserId: null,
  bearer_token: null,
};

export default (states = INITIAL_STATE, action) => {
  switch (action.type) {
    case ISUSERLOGIN:
      return {
        ...states,
        isUserLogin: !states.isUserLogin,
      };
    case TEMPORARY_USER_ID: {
      return {
        ...states,
        temporaryUserId: action.payload,
      };
    }
    case GET_USER_PROFILE: {
      return {
        ...states,
        user: action.payload,
      };
    }
    case GET_BEARER_TOKEN: {
      return {
        ...states,
        bearer_token: action.payload,
      };
    }
    default:
      return states;
  }
};

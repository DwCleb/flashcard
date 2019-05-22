export const Types = {
  SET_MESSAGE: 'user/SET_MESSAGE',
  CLEAN_MESSAGE: 'user/CLEAN_MESSAGE',
  CLEAN_USER_INFO: 'user/CLEAR_USER_INFO',
};

const initialState = {
  data: {},
  message: null,
  isLoading: false,
  isFbLoading: false,
  isLogged: false,
  fbSignUp: false,
  createLogin: false,
  errorOnAdd: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.SET_MESSAGE:
      return {
        ...state,
        isLoading: false,
        message: action.payload.message,
      };
    case Types.CLEAN_MESSAGE:
      return {
        ...state,
        message: null,
        isLoading: false,
      };
    case Types.CLEAN_USER_INFO:
      return {
        ...state,
        data: {},
      };
    default:
      return state;
  }
}

export const Creators = {
  setMessage: message => ({
    type: Types.SET_MESSAGE,
    payload: {
      message,
    },
  }),

  cleanUserInfo: () => ({
    type: Types.CLEAN_USER_INFO,
  }),

  cleanUserMessage: () => ({
    type: Types.CLEAN_MESSAGE,
  }),
};

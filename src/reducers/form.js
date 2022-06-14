const initialState = {
  email: '',
  company: '',
  hasError: false,
}

export default function formReducer(state = initialState, action) {

  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload,
      };
    case 'SET_COMPANY':
      return {
        ...state,
        company: action.payload,
      };
    case 'HAS_ERROR':
      return {
        ...state,
        hasError: action.payload,
      };
    default:
      return state;
  }
}

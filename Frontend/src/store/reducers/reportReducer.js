const initialState = {
  email: null,
  sms: null,
  meet: null,
  pay: null,
};

export function reportReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.count };
    case 'SET_SMS':
      return { ...state, sms: action.count };
    case 'SET_MEET':
      return { ...state, meet: action.count };
    case 'SET_PAY':
      return { ...state, pay: action.count };
    default:
      return state;
  }
}

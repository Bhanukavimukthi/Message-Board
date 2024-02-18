export const initialState = {
    channels: [],
    selectedChannel: null,
    messages: [],
    newMessage: '',
  };
  
  export const actionTypes = {
    SET_CHANNELS: 'SET_CHANNELS',
    SELECT_CHANNEL: 'SELECT_CHANNEL',
    SET_MESSAGES: 'SET_MESSAGES',
    SET_NEW_MESSAGE: 'SET_NEW_MESSAGE',
  };
  
  export const messageReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_CHANNELS:
        return { ...state, channels: action.payload };
      case actionTypes.SELECT_CHANNEL:
        return { ...state, selectedChannel: action.payload };
      case actionTypes.SET_MESSAGES:
        return { ...state, messages: action.payload };
      case actionTypes.SET_NEW_MESSAGE:
        return { ...state, newMessage: action.payload };
      default:
        return state;
    }
  };
  
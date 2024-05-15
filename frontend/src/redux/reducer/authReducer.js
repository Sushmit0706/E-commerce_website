const initialState = {
    isAuthenticated: false,
    // other initial state properties...
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          // other state updates...
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          // other state updates...
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  
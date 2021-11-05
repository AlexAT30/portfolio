const Reducers = (state, action) => {
  const {payload, type} = action;

  switch(type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: payload
      }
    case 'CHANGE_DARKMODE':
      return {
        ...state, 
        darkMode: payload
      }
    default:
      return state
  }
}

export default Reducers;

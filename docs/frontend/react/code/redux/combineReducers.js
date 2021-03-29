function combineReducers(reducers) {
  return (state, action) => {
    let newstate = {};
    for (const key in reducers) {
      const reducer = reducers[key];
      newstate[key] = reducer(state[key], action);
    }
    return newstate;
  };
}
export default combineReducers;

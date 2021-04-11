export default (config, reducer) => {
  let { storage, key } = config;
  key = `persist:${key}`;
  let isInit = false;
  return (state, action) => {
    switch (action.type) {
      case "INITSTATE":
        isInit = true;
        let localState = storage.getItem(key);
        localState ? (state = localState) : storage.setItem(key, state);
        return state;
      default:
        if (isInit) {
          let newState = reducer(state, action);
          storage.setItem(key, newState);
          return newState;
        }
        return reducer(state, action);
    }
  };
};

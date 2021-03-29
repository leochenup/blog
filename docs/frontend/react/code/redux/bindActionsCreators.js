let bindActionsCreator = (actionsCreator, dispatch) => {
  return function () {
    return dispatch(actionsCreator.apply(this, arguments));
  };
};

let bindActionsCreators = (actions, dispatch) => {
  if (typeof actions === "function") {
    return bindActionsCreator(actions, dispatch);
  } else {
    let bindActions = {};
    for (const key in actions) {
      const actionsCreator = actions[key];
      bindActions[key] = bindActionsCreator(actionsCreator, dispatch);
    }
    return bindActions;
  }
};

export default bindActionsCreators;
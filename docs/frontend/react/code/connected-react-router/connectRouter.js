import { LOCATION_CHANGE } from "./constants";

export default (history) => {
  // 初始状态
  let initState = { action: history.action, location: history.location };
  return (state = initState, action) => {
    switch (action.type) {
      case LOCATION_CHANGE:
        return { ...action.payload };
      default:
        return state;
    }
  };
};

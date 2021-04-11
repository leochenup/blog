import { CALL_HISTRY_METHOD } from "./constants";
export default (history) => ({ getState, dispatch }) => (next) => (action) => {
  if (action.type === CALL_HISTRY_METHOD) {
    const { method, path } = action.payload;
    history[method](path);
  } else {
    next(action);
  }
};

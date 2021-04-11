import { CALL_HISTRY_METHOD } from "./constants";
export default (path) => ({
  type: CALL_HISTRY_METHOD,
  payload: {
    method: "push",
    path,
  },
});

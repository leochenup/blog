export default function (store) {
  return {
    ...store,
    initState() {
      store.dispatch({
        type: "INITSTATE",
      });
    },
  };
}

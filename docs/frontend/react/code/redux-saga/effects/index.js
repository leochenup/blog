export const take = (actionType) => {
  return {
    type: "TAKE",
    actionType,
  };
};
export const put = (action) => {
  return {
    type: "PUT",
    action,
  };
};

const innerDelay = (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};
  
export function delay(...args) {
  return call(innerDelay, ...args);
}

export function fork(task) {
  return {
    type: "FORK",
    task,
  };
}

export function* takeEvery(actionType, worker) {
  yield fork(function* () {
    while (true) {
      yield take(actionType);
      yield worker();
    }
  });
}

export function call(fn, ...args) {
  return {
    type: "CALL",
    fn,
    args,
  };
}

export function cps(fn, ...args) {
  return {
    type: "CPS",
    fn,
    args,
  };
}
export function all(workers) {
  return {
    type: "ALL",
    workers,
  };
}
export function cancel(task) {
  return {
    type: "CANCEL",
    task,
  };
}

export default function createSagaReducer() {
  function channelCreator() {
    let subscribeFns = {};
    window.subscribeFns = subscribeFns;
    function subscribe(actionType, next) {
      subscribeFns[actionType] = next;
    }

    function publish(action) {
      if (subscribeFns[action.type]) {
        let next = subscribeFns[action.type];
        delete subscribeFns[action.type];
        next(action);
      }
    }
    return {
      subscribe,
      publish,
    };
  }
  let channel = channelCreator();

  const sagaMiddleWare = ({ getState, dispatch }) => {
    sagaMiddleWare.run = (generator, preNext, Allfinish) => {
      let it =
        typeof generator[Symbol.iterator] == "function"
          ? generator
          : generator();

      next();
      function next(arg) {
        let { value: effct, done } = it.next(arg);
        if (!done) {
          if (typeof effct[Symbol.iterator] == "function") {
            sagaMiddleWare.run(effct, next);
          } else {
            switch (effct.type) {
              case "TAKE":
                channel.subscribe(effct.actionType, next);
                break;
              case "PUT":
                dispatch(effct.action);
                next();
                break;
              case "CALL":
                if (effct.fn(...effct.args) instanceof Promise) {
                  effct.fn(...effct.args).then(next);
                } else {
                  next(effct.fn(...effct.args));
                }
                break;
              case "CPS":
                effct.fn(...effct.args, (res) => {
                  next(res);
                });
                break;

              case "FORK":
                let task = effct.task();
                sagaMiddleWare.run(task);
                next(task);
                break;
              case "ALL":
                function times(count) {
                  let i = 0;
                  return function () {
                    if (++i === count) {
                      next();
                    }
                  };
                }
                let Allfinish = times(effct.workers.length);
                effct.workers.forEach((worker) => {
                  sagaMiddleWare.run(worker, null, Allfinish);
                });
                break;
              case "CANCEL":
                effct.task.return();
                next();
                break;
              default:
                break;
            }
          }
        } else {
          preNext && preNext(effct);
          Allfinish && Allfinish();
        }
      }
    };

    return (next) => (action) => {
      channel.publish(action);
      next(action);
    };
  };

  return sagaMiddleWare;
}

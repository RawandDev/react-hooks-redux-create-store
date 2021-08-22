const ACTIONS = {
  INCREASE_COUNTER: "counter/increment",
  DECREASE_COUNTER: "counter/decrement",
};

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return { dispatch, getState };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case ACTIONS.INCREASE_COUNTER:
      return { count: state.count + 1 };

    case ACTIONS.DECREASE_COUNTER:
      return { count: state.count - 1 };

    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

let store = createStore(reducer);

store.dispatch({ type: "@@INIT" });
let button = document.getElementById("button");
let button2 = document.getElementById("button2");

button.addEventListener("click", function () {
  store.dispatch({ type: ACTIONS.INCREASE_COUNTER });
});

button2.addEventListener("click", function () {
  store.dispatch({ type: ACTIONS.DECREASE_COUNTER });
});

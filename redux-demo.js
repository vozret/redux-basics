const redux = require("redux");

// reducer function always recieves old state and dispatched action
// outputs new state object
// should be a pure function -> same input leads to same output -> no side effects
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

// createStore needs to know which function is changing the state
const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  // gives us the latest state snapshot after it was updated
  const latestState = store.getState();
  console.log(latestState);
};

// redux must know about subscriber function
// we just point at the subscriber function
// it will be executed by redux
store.subscribe(counterSubscriber);

// creating a dispatch action
store.dispatch({ type: "increment" });

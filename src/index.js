import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Counter from './Counter';

import * as serviceWorker from './serviceWorker';

const reducer = (state = { counters: [] }, action) => {
  const newState = { ...state };
  console.log(newState);

  console.log(action);
  switch (action.type) {
    case "ADD_COUNTER":
      newState.counters.push({ index: newState.counters.length, value: 0 });
      return newState;
    case "REMOVE_COUNTER":
      if (newState.counters.length) {
        return newState.counters.splice(newState.counters.length - 1, 1);
      } else {
        return newState;
      }
    case "INCREMENT_COUNTER":
      console.log(newState.counters);
      newState.counters[action.index].value += 1;
      return newState;
    case "DECREMENT_COUNTER":
      newState.counters[action.index].value -= 1;
      return newState;
    default:
      return newState;
  }
}

const store = createStore(reducer);

const props = {
  addCounter: () => store.dispatch({ type: "ADD_COUNTER" }),
  removeCounter: () => store.dispatch({ type: "REMOVE_COUNTER" }),
  data: store.getState(),
  incrementCounter: (value) => store.dispatch({ type: "INCREMENT_COUNTER", index: value }),
  decrementCounter: (value) => store.dispatch({ type: "DECREMENT_COUNTER", index: value }),
}

const render = () => {
  console.log(store.getState());
  ReactDOM.render(<Counter {...props} />, document.getElementById('root'));
}

store.subscribe(render);
render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

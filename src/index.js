import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Counter from './Counter';

import * as serviceWorker from './serviceWorker';

const reducer = (state = { counters: [] }, action) => {

  console.log(action);
  switch (action.type) {
    case "ADD_COUNTER":
      return { counters: state.counters.concat({ index: state.counters.length, value: 0 }) };
    case "REMOVE_COUNTER":
      if (state.counters.length) {
        return { counters: state.counters.slice(0, state.counters.length - 2) };
      } else {
        return state;
      }
    case "INCREMENT_COUNTER":
      console.log()
      return { counters: [...state.counters.slice(0, action.index), { index: action.index, value: state.counters[action.index].value + 1 }, ...state.counters.slice(action.index + 1)] };
    case "DECREMENT_COUNTER":
      return { counters: [...state.counters.slice(0, action.index), { index: action.index, value: state.counters[action.index].value - 1 }, ...state.counters.slice(action.index + 1)] };
    default:
      return state;
  }
}

const store = createStore(reducer);


const render = () => {
  console.log(store.getState());
  const props = {
    addCounter: () => store.dispatch({ type: "ADD_COUNTER" }),
    removeCounter: () => store.dispatch({ type: "REMOVE_COUNTER" }),
    data: store.getState(),
    incrementCounter: (value) => store.dispatch({ type: "INCREMENT_COUNTER", index: value }),
    decrementCounter: (value) => store.dispatch({ type: "DECREMENT_COUNTER", index: value }),
  }
  // console.log(props);
  ReactDOM.render(<Counter {...props} />, document.getElementById('root'));
}

store.subscribe(render);
render();



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

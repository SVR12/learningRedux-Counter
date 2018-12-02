import React from 'react';

const CounterComponent = (componentProps) => (
  <div>
    <p>Counter No, {componentProps.index}, value: {componentProps.value}</p>
    <button onClick={() => componentProps.incrementCounter(componentProps.index)}>+</button>
    <button onClick={() => componentProps.decrementCounter(componentProps.index)}>-</button>
  </div>
);

const counter = (props) => {

  console.log(props);

  const counterComponents = props.data.counters.map(
    (counter, key) => {
      return (
        <CounterComponent
          key={key} index={key} value={counter.value}
          incrementCounter={(value) => props.incrementCounter(value)}
          decrementCounter={(value) => props.decrementCounter(value)}
        />
      );
    }
  );

  return (
    <div>
      <h1>Counters {props.data.length}</h1>
      {counterComponents}
      <button onClick={props.addCounter}>ADD COUNTER</button>
      <button onClick={props.removeCounter}>REMOVE COUNTER</button>
    </div>
  );
}

export default counter;

import { useState, useReducer } from 'react';

const Example = () => {
  const [rstate, dispatch] = useReducer((prev, { type, step }) => {
    // if (action === '+') {
    //   return ++prev
    // } else if (action === '-') {
    //   return --prev
    // }
    switch (type) {
      case '+':
        return prev + step;
      case '-':
        return prev - step;
      default:
        return;
    }
  }, 0);

  const rcountUp = () => {
    dispatch({ type: '+', step: 2 });
  };

  const rcountDown = () => {
    dispatch({ type: '-', step: 3 });
  };

  return (
    <>
      <h3>{rstate}</h3>
      <button onClick={rcountUp}>+</button>
      <button onClick={rcountDown}>-</button>
    </>
  );
};

export default Example;

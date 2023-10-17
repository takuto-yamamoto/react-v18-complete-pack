import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountResult title="カウント" count={count} />
      <CountUpdate setCount={setCount} />
    </>
  );
};

const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

const CountResult = ({ title, count }) => {
  return (
    <h3>
      {title}: {count}
    </h3>
  );
};

export default Example;

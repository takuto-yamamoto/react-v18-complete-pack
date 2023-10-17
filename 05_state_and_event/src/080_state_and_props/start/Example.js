import { useState } from 'react';

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  // stateをpropsで渡すことで複数のcomponentでの共有が可能
  // コンポーネントが消滅する可能性がある場合は親コンポーネントででstateを定義する
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? (
        <Count count={countA} setCount={setCountA} key="A" title="A" />
      ) : (
        <Count count={countB} setCount={setCountB} key="B" title="B" />
      )}
    </>
  );
};
const Count = ({ title, count, setCount }) => {
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

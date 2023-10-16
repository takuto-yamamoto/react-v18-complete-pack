import { useState } from 'react';

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {/** 同じノードの位置の場合はstateは引き継ぐ */}
      {/** 分けたい場合にはkey属性を指定 */}
      {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
    </>
  );
};

// stateはコンポーネント毎に保持される
const Count = ({ title }) => {
  const [count, setCount] = useState(0);
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

import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
    // 即時更新ではなく更新の非同期予約に相当するので
    // 2回呼び出しても無意味になる
    setCount(count + 1);
    // 予約時点でのステートを引数とする場合にはコールバックで呼び出す
    setCount((count) => count + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

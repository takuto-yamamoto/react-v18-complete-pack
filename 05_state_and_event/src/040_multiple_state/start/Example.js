import { useState } from 'react';

const Example = () => {
  // フックはコンポーネントのトップレベルでしか呼べない
  let [countA, setCountA] = useState(0);
  let [countB, setCountB] = useState(0);
  let [countC, setCountC] = useState(0);

  return (
    <>
      <p>ボタンを{countA}回押しました！</p>
      <button onClick={() => setCountA(countA + 1)}>ボタンA</button>
      <p>ボタンを{countB}回押しました！</p>
      <button onClick={() => setCountB(countB + 1)}>ボタンB</button>
      <p>ボタンを{countC}回押しました！</p>
      <button onClick={() => setCountC(countC + 1)}>ボタンC</button>
    </>
  );
};

export default Example;

import { useEffect, useState } from 'react';

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>トグル</button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('useEffect is called');

    let intervalId;
    intervalId = window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log('component破壊時に発火');
      window.clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key-end', time);

    return () => {
      console.log('クリーンアップ');
    };
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;

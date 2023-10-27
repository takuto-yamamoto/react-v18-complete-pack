import { useEffect, useState, useLayoutEffect } from 'react';

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);

  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((prev) => !prev)}>
        {isDisp ? '非表示' : '表示'}
      </button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isStop, setIsStop] = useState(false);

  useEffect(() => {
    let intervalId;
    if (!isStop) {
      intervalId = window.setInterval(() => {
        // console.log('interval running');
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      window.clearInterval(intervalId);
    };
  }, [isStop]);

  useEffect(() => {
    // console.log('updated');

    document.title = 'counter:' + time;
    window.localStorage.setItem('time-key', time);

    return () => {
      // debugger
      // console.log('updated end');
    };
  }, [time]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key'));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  const resetTimer = () => {
    setTime(0);
  };

  return (
    <>
      <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      <div>
        <button onClick={() => setIsStop((prev) => !prev)}>
          {isStop ? 'スタート' : '一時停止'}
        </button>
        <button onClick={resetTimer}>リセット</button>
      </div>
    </>
  );
};

export default Example;

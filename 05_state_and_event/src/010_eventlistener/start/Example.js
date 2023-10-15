const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました');
  };
  const clickHandler2 = () => {
    console.log('ボタンがクリックされました');
  };
  return (
    <>
      {/** HTMLならonclickだがJSだとonClick*/}
      {/** onClickに渡すのは関数自体で、関数実行した返り値ではない */}
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;

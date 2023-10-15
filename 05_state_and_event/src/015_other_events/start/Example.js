import './Example.css';

const Example = () => {
  return (
    <div>
      <h3>コンソールを確認してください。</h3>
      <label>
        入力値のイベント：
        <input
          type="text"
          // 文字列が変わったとき
          onChange={() => console.log('onChange検知')}
          // 入力欄がフォーカスを失った時
          onBlur={() => console.log('onBlur検知')}
          // フォーカスされた時
          onFocus={() => console.log('onFocus検知')}
        />
      </label>
      <div>
        <label>
          入力値を取得：
          {/** event.target.valueで取得可能 */}
          <input type="text" onChange={(e) => console.log(e.target.value)} />
        </label>
      </div>
      * {/** マウスが領域に入った時、出て行った時 */}
      <div
        className="hover-event"
        onMouseEnter={() => console.log('カーソルが入ってきました。')}
        onMouseLeave={() => console.log('カーソルが出ていきました。')}
      >
        ホバーしてね！
      </div>
    </div>
  );
};

export default Example;

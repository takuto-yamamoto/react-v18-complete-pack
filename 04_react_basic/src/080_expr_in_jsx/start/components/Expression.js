import './Expression.css';

const Expression = () => {
  const title = 'Expression';
  const array = ['item1', 'item2', 'item3'];
  const hello = (arg) => `${arg} function`;
  const jsx = <h3>Hello JSX</h3>;
  const bool = true;
  // プレースホルダ内にJS式を格納可能
  // 配列は自動で展開される
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{array}</h3>
      <h3>{hello('hello')}</h3>
      <h3>{/**画面上に表示されない */}</h3>
      {jsx}
      {bool /**何も出力されない */}
    </div>
  );
};

export default Expression;

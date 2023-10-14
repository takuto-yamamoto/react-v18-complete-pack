const Hello = (props) => {
  // props.name = 'Bob'; // 書き込み不可

  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;

import React from 'react';

const Example = () => {
  // JSXはJSのコードなので代入可能
  const sample1 = <h1 className="greeting">Hello World</h1>;

  // React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World");

  // トップレベルタグは1つ
  // JSXがreact要素に変換されるのはBable->Rreact.createElement
  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );

  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );

  // React.createElement(type, props, children1, children2...)
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello!'),
    React.createElement('h2', null, 'Good to see you.')
  );
};

export default Example;

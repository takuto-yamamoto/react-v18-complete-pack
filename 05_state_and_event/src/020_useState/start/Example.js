import { useState } from 'react';

const Example = () => {
  // useStateでeventの値にイベント属性外部からアクセスする
  // Reactにコンポーネントの再実行を依頼する必要がある
  let [displayVar, setDisplayVar] = useState();

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setDisplayVar(e.target.value);
        }}
      />
      = {displayVar}
    </>
  );
};

export default Example;

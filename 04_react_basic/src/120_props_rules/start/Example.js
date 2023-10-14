// POINT propsの流れは一方通行(親->子)
// 共通の変数を使用したい場合は、親コンポーネントで定義が必要

// POINT propsは読み取り専用

import Bye from './components/Bye';
import Hello from './components/Hello';

const Example = () => {
  const name = 'Tom';

  return (
    <>
      <Hello name={name} />
      <Bye name={name} />
    </>
  );
};

export default Example;

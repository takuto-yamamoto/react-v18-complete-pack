import { Suspense, lazy, useState, startTransition } from 'react';

// コンポーネントのimportをlazyでラップすると必要に応じてimport可能
const LazyComponentA = lazy(() => import('./components/ComponentA'));

const Example = () => {
  const [compA, setCompA] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          // イベントハンドラーをstartTransitionでラップするとステート変更による再レンダリングが完了するまで、元の値を表示し続ける
          startTransition(() => {
            setCompA((prev) => !prev);
          });
        }}
      >
        ComponentA
      </button>
      <Suspense fallback={<div>Loading!!!!</div>}></Suspense>
      {compA && <LazyComponentA />}
    </>
  );
};

export default Example;

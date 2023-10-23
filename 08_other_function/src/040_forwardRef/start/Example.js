import { useRef, forwardRef } from 'react';

const Example = () => {
  const Input = forwardRef((props, ref) => {
    return <input type="text" ref={ref} />;
  });
  const ref = useRef();
  return (
    <>
      <Input ref={ref}></Input>
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;

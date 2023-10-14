import Child from './components/Child';

const Example = () => {
  const hello = (arg) => `Hello ${arg}`;
  const bool = true;
  const props = {
    color: 'red',
    fn: hello,
  };

  return (
    <>
      {/* <Child color="blue" /> */}
      <Child {...props} bool={bool} obj={{ name: 'Tom', age: 28 }} />
    </>
  );
};

export default Example;

import Child from './components/Child';

import { createContext } from 'react';

export const myContext = createContext('hello');

const Example = () => {
  return <Child />;
};

export default Example;

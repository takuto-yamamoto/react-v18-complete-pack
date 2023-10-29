import { add } from './add';

const Example = () => {
  // 不要なモジュールを必要になったときにimport可能
  const dynamicImport = async () => {
    const module = await import('./add');
  };
  import('./add').then((module) => {});
};

export default Example;

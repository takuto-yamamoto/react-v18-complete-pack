import CounterResult from './CounterResult';
import CounterButton from './CounterButton';
import { add, addAsync, minus } from '../store/modules/counter';

const Counter = () => {
  return (
    <>
      <CounterResult />
      <CounterButton step={2} calcType="+" actionCreater={add} />
      <CounterButton step={2} calcType="-" actionCreater={minus} />
      <CounterButton step={2} calcType="非同期(+)" actionCreater={addAsync} />
    </>
  );
};
export default Counter;

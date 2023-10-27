import { useDispatch } from 'react-redux';
import { add, minus } from '../store/modules/counter';

const CounterButton = ({ calcType, step, actionCreater }) => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(actionCreater(step));
  };

  return (
    <button onClick={clickHandler}>
      {calcType}
      {step}
    </button>
  );
};
export default CounterButton;

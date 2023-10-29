import { counterReducer } from './counterReducer';

const initState = { count: 0, step: 1 };

describe('counterReducerの動作確認', () => {
  test('up', () => {
    const newState = counterReducer(initState, { type: 'up' });
    expect(newState).toEqual({ count: 1, step: 1 });
  });
  test('down', () => {
    const newState = counterReducer(initState, { type: 'down' });
    expect(newState).toEqual({ count: -1, step: 1 });
  });
  test('changeStep => up', () => {
    const step2State = counterReducer(initState, {
      type: 'changeStep',
      payload: 2,
    });
    const newState = counterReducer(step2State, { type: 'up' });
    expect(newState).toEqual({ count: 2, step: 2 });
    expect(newState.count).toBe(2); // プリミティブ値の比較
  });
});

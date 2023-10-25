import { createContext, useContext, useReducer } from 'react';

const calcContext = createContext();
const calcDispatchContext = createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'change': {
      const { name, value } = payload;
      return { ...state, [name]: value };
    }
    case 'add': {
      return { ...state, result: parseInt(state.a) + parseInt(state.b) };
    }
    case 'minus': {
      return { ...state, result: state.a - state.b };
    }
    case 'divide': {
      return { ...state, result: state.a / state.b };
    }
    case 'multiply': {
      return { ...state, result: state.a * state.b };
    }
    default:
      throw new Error('operator is invalid');
  }
};

const CalcProvider = ({ children }) => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <calcContext.Provider value={state}>
        <calcDispatchContext.Provider value={dispatch}>
          {children}
        </calcDispatchContext.Provider>
      </calcContext.Provider>
    </>
  );
};

const useCalc = () => useContext(calcContext);
const useCalcDispatch = () => useContext(calcDispatchContext);

export { CalcProvider, useCalc, useCalcDispatch };

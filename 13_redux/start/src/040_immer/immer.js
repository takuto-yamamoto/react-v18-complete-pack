import { produce } from 'immer';

const state = {
  name: 'Tom',
  hobbies: ['tennis', 'soccer'],
};

const newState = produce(state, (draft) => {
  draft.name = 'John';
});

// console.log(newState === state) // false

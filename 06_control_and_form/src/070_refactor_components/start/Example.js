import { useState } from 'react';

import AnimalList from './components/AnimalList';
import AnimalFilter from './components/AnimalFIlter';

const Example = () => {
  const animals = ['Dog', 'Cat', 'Rat'];

  const [filterVal, setFilterVal] = useState('');
  const filteredAnimals = animals.filter((animal) => {
    return animal.indexOf(filterVal) !== -1;
  });

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filteredAnimals} />
    </>
  );
};

export default Example;

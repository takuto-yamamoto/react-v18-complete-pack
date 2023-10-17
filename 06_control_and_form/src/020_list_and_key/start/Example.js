const animals = ['Dog', 'Cat', 'Rat'];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {/* {animalList} */}

        {/* 繰り返し処理を行う子要素についてはkeyプロパティをつける */}
        {/* 順序を持たないリストで順序が入れ替わっても、差分を最小限にできる */}
        {animals.map((animal) => (
          <li key={animal}>Hello, {animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;

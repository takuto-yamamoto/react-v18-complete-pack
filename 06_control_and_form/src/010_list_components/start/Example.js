const animals = ['Dog', 'Cat', 'Rat'];

// やらない
const Example1 = () => {
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        <li>Hello, {animals[0]}</li>
        <li>Hello, {animals[1]}</li>
        <li>Hello, {animals[2]}</li>
      </ul>
    </>
  );
};

// あんまやらない
const Example2 = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>Hello, {animal}</li>);
  }

  return (
    <>
      <h3>配列の操作</h3>
      <ul>{animalList}</ul>
    </>
  );
};

// 定番(map)
const Example3 = () => {
  const helloAnimals = animals.map((animal) => <li>Hello, {animal}</li>);

  return (
    <>
      <h3>配列の操作</h3>
      <ul>{helloAnimals}</ul>
    </>
  );
};

export default Example3;

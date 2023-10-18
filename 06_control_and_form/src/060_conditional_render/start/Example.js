import { useState } from 'react';

const Example = () => {
  const animals = ['Dog', 'Cat', 'Rat'];

  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => {
            return (
              <li>
                {animal}
                {/* 左がtrueの場合に右の値を返す */}
                {animal === 'Dog' && '★'}
              </li>
            );
            // 3項演算子
            // return (
            //   <li key={animal}>{animal + (animal === 'Dog' ? '★' : '')}</li>
            // );
            // 通常のif文
            // if (animal === "Dog") {
            //   return <li key={animal}>{animal}★</li>
            // } else {
            //   return <li key={animal}>{animal}</li>
            // }
          })}
      </ul>
    </>
  );
};

export default Example;

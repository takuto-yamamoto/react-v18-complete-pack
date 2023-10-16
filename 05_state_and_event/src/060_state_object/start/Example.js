import { useState } from 'react';

const Example = () => {
  const personObj = { name: 'Tom', age: 18 };
  const [person, setPerson] = useState(personObj);

  // objを更新する場合にはstateとは異なる新しいオブジェクトを指定する必要がある
  // 更新結果がfalseになるのをトリガーに画面をレンダリングしたいため
  // 他のプロパティも更新する必要がある
  const changeName = (e) => {
    setPerson({
      ...person, // スプレッド演算子が先
      name: e.target.value,
    });
    // setPerson({
    //   name: e.target.value,
    //   age: person.age,
    // });
  };

  const changeAge = (e) => {
    setPerson({
      ...person,
      age: e.target.value,
    });
  };

  const resetPerson = () => {
    setPerson({ name: '', age: '' });
  };

  return (
    <>
      <h3>Name:{person.name}</h3>
      <h3>Age:{person.age}</h3>
      <input type="text" value={person.name} onChange={changeName}></input>
      <input type="number" value={person.age} onChange={changeAge}></input>
      <div>
        <button onClick={resetPerson}>リセット</button>
      </div>
    </>
  );
};

export default Example;

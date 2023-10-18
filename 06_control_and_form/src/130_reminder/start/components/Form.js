import { useState } from 'react';

const Form = ({ createTodo }) => {
  const [content, setContent] = useState('');

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: content,
    };

    createTodo(newTodo);

    setContent('');
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Form;

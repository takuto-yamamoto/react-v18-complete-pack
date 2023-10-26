import { useState, useEffect } from 'react';

const Example = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    checked && window.alert('clicked!');
  }, [checked]);

  return (
    <>
      <label>
        <input
          type={'checkbox'}
          value={checked}
          onClick={() => setChecked((checked) => !checked)}
        />
        click me
      </label>
    </>
  );
};

export default Example;

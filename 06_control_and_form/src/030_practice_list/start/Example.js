import Profile from './components/Profile';

const profiles = [
  { name: 'Geo', age: 18, hobbies: ['sports', 'music'] },
  { name: 'Tom', age: 25, hobbies: ['movie', 'music'] },
  { name: 'Lisa', age: 21, hobbies: ['sports', 'travel', 'game'] },
];

const Example = () => {
  return (
    <>
      <ul>
        {profiles.map((props) => (
          <li key={props.name}>
            <Profile {...props} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;

import Profile from './components/Profile';
import Container from './components/Container';

const profile = [
  { name: 'Takashi', age: 19, country: 'Japan', color: 'green' },
  { name: 'Jane', age: 28, country: 'UK', color: 'blue' },
];

const Example = () => {
  return (
    <div>
      <Container
        title="Childrenとは？"
        // children属性に格納する場合はユニークなkey属性が必要
        children={[
          <Profile key={profile[0].name} {...profile[0]} />,
          <Profile key={profile[1].name} {...profile[1]} />,
        ]}
      ></Container>
    </div>
  );
};

export default Example;

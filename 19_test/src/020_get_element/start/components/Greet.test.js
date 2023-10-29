import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('h1が存在するかどうか', () => {
  const { debug, container } = render(<Greet />);
  const h1El = screen.getByText('こんにちは');
  expect(h1El).toBeInTheDocument();

  // 基本的にはgetByRoleで取得する
  // ユーザーアクセシビリティやテキストなどのユーザーから見える要素で検索する
  const imgEl = screen.getByRole('img');
  debug(imgEl);

  // const headingEl = screen.getByRole('heading');
  const h2El = container.querySelector('h2');
});

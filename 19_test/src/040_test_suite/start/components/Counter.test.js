import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component Test', () => {
  test('「カウントアップ」押下で「現在のカウント」が+1されるか', () => {
    render(<Counter originCount={0} />);

    const spanElBeforeUpdate = screen.getByText('現在のカウント:0');
    expect(spanElBeforeUpdate).toBeInTheDocument();

    const btn = screen.getByRole('button', { name: 'カウントアップ' });
    fireEvent.click(btn);

    const spanEl = screen.getByText('現在のカウント:1');
    expect(spanEl).toBeInTheDocument();
  });

  test('「クリア」押下で「現在のカウント」がリセットされるか', () => {
    // Arrange
    render(<Counter originCount={10} />);

    const spanElBeforeUpdate = screen.getByText('現在のカウント:10');
    expect(spanElBeforeUpdate).toBeInTheDocument();

    const btn = screen.getByRole('button', { name: 'クリア' });
    fireEvent.click(btn);

    const spanEl = screen.getByText('現在のカウント:0');
    expect(spanEl).toBeInTheDocument();
  });

  test('「カウントダウン」押下で「現在のカウント」が-1されるか', () => {
    // Arrange
    render(<Counter originCount={10} />);

    // Act
    const btn = screen.getByRole('button', { name: 'カウントダウン' });
    fireEvent.click(btn);

    // Assertion
    const spanEl = screen.getByText('現在のカウント:9');
    expect(spanEl).toBeInTheDocument();
  });
});

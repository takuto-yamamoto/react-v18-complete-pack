import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Message from './Message';

// import { render, screen } from "@testing-library/react";
// import Message from "./Message";
// import userEvent from "@testing-library/user-event";

describe('Messageコンポーネントの動作確認', () => {
  describe('初期表示の正常性確認', () => {
    test('入力された文字が画面に存在', () => {
      // Arrange
      render(<Message></Message>);

      // Assert
      const h2El = screen.getByRole('heading', { name: '入力された文字:' });
      expect(h2El).toBeInTheDocument();
    });
  });

  describe('画面操作正常性確認', () => {
    test('入力値の変更 => 送信ボタン押下', async () => {
      // Arrange
      const user = userEvent.setup();
      render(<Message></Message>);

      // Initial Assert
      const inputEl = screen.getByRole('textbox');
      const buttonEl = screen.getByRole('button', { name: '送信ボタン' });
      const h2El = screen.getByRole('heading', { name: '入力された文字:' });
      expect(buttonEl).toBeDisabled();
      expect(inputEl.value).toBe('');
      expect(h2El).toBeInTheDocument();

      // Act
      await user.type(inputEl, 'こんにちは');

      // Assert
      expect(buttonEl).not.toBeDisabled();

      // Act
      await user.click(buttonEl);

      // Assert
      expect(h2El.textContent).toBe('入力された文字:こんにちは');
    });
  });
});

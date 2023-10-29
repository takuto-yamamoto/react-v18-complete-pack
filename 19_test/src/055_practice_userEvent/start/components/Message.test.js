import Message from './Message';

import { screen, render } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

describe('Messageのテスト', () => {
  test('画面内にinput要素が表示されている', () => {
    // Arrange
    render(<Message></Message>);

    // Assertion
    const inputEl = screen.getByRole('textbox');
    expect(inputEl).toBeInTheDocument();
  });

  test('inputのstateが更新され、テキストが表示されるか', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<Message></Message>);

    // Act
    const inputEl = screen.getByRole('textbox');
    await user.type(inputEl, 'test');

    // Assertion
    const updatedInputEl = screen.getByRole('textbox');
    expect(updatedInputEl.value).toBe('test');
  });
});

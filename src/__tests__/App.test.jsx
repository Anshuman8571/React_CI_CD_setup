import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { test } from 'vitest';
test('renders Vite + React text', () => {
    render(<App />);
//    const linkElement = screen.getByText(/Vite /+ /React/i); //Assuming "learn react" text is present
//    expect(linkElement).toBeInTheDocument();
});

test('increament count on button click', () => {
    render(<App />);
    const buttonElement = screen.getByText(/count is 0/i);
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 1');

    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('count is 2');

});

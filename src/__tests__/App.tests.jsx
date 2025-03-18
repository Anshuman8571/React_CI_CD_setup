import { render, screen } from '@testing-library/react';
import App from '../App';
test('renders a component', () => {
    render(<App />);
    const linkElement = screen.getByText(/Vite + React/i); //Assuming "learn react" text is present
    expect(linkElement).toBeInTheDocument();
})

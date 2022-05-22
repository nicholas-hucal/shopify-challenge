import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react'
import App from '../App';

describe("App component", () => {
    test('renders the app', () => {
        render(<App />);
    });
});
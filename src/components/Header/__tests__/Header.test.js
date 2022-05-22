import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react'
import Header from '../Header';

describe("Header component", () => {
    test('renders the header', () => {
        render(<Header />);
    });

    test('renders the header contents', () => {
        render(<Header />);
        expect(screen.getByRole("heading")).toBeInTheDocument();
        expect(screen.getByRole("heading")).toHaveTextContent(/fun with ai/i);
    });
});
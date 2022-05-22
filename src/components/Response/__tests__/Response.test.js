import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react'
import Response from '../Response';

describe("Response component", () => {
    const response = {
        prompt: 'Question',
        response: 'Answer'
    }

    const handleDelete = () => {
        console.log('test')
    }

    test('renders the response', () => {
        render(<Response response={response} index={1} handleDelete={handleDelete} />);
    });

    test('renders the response contents', () => {
        render(<Response response={response} index={1} handleDelete={handleDelete} />);
        expect(screen.getAllByRole('heading').length).toBe(2);
    });
});

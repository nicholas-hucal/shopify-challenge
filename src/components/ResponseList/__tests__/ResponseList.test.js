import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react'
import ResponseList from '../ResponseList';

describe("ResponseList component", () => {
    const responses = [
        {
            prompt: 'Question',
            response: 'Answer'
        }
    ]

    const deleteResponse = () => {
        console.log('test')
    }

    test('renders the responseList', () => {
        render(<ResponseList responses={responses} deleteResponse={deleteResponse}/>);
    });
});

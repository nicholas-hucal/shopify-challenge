import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react'
import Form from '../Form';

describe("Form component", () => {
    test('renders the form', () => {
        render(<Form />);
    });

    test('renders the form contents', () => {
        render(<Form />);
        expect(screen.getAllByRole("button").length).toBe(4);
        expect(screen.getByRole("textbox")).toHaveAccessibleName('enter a prompt');
        expect(screen.getByRole('button', { name: /send/i }))
    });


    test('render prompt input', () => {
        render(<Form />);

        const inputEl = screen.getByTestId("prompt");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "text");
    });

    test('pass valid question', () => {
        render(<Form />);

        const inputEl = screen.getByTestId("prompt");
        userEvent.type(inputEl, "why is the sky blue?");

        expect(screen.getByTestId("prompt")).toHaveValue("why is the sky blue?");
        expect(screen.queryByTestId("warning")).toBeVisible();
    });

    test('pass invalid question', () => {
        render(<Form />);

        const inputEl = screen.getByTestId("prompt");
        userEvent.type(inputEl, "a");

        expect(screen.getByTestId("prompt")).toHaveValue("a");
        expect(screen.queryByTestId("warning")).toBeInTheDocument();
        expect(screen.queryByTestId("warning").textContent).toEqual(" You must enter more than 3 characters or select a default prompt from above!!");
    });

});
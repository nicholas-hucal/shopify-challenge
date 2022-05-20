import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { v4 as uuidv4 } from 'uuid';
import { ImWarning } from 'react-icons/im';
import { FiSend } from 'react-icons/fi';
import { VscGear } from 'react-icons/vsc';
import './Form.scss';

const Form = ({ addResponse }) => {

    const [prompt, setPrompt] = useState('');
    const [sending, setSending] = useState(false);
    const [validation, setValidation] = useState(false);
    const [firstFocus, setFirstFocus] = useState(false);

    const getOptions = () => {
        const options = [
            "How does this work",
            "I'm interested in learning more about OpenAI",
            "What is your name"
        ];
        return options;
    }

    useEffect(() => {
        const validate = () => {
            if (prompt.length < 3) {
                setValidation(false);
            } else {
                setValidation(true);
            }
        }
        if (firstFocus) {
            validate();
        }
    }, [prompt.length, firstFocus]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validation) {
            setSending(sending => !sending);
            api.getResponse(prompt)
                .then(response => {
                    addResponse({
                        prompt: prompt,
                        response: response.data.choices[0].text.substring(2)
                    })
                })
                .then(_ => {
                    setPrompt('');
                    setSending(sending => !sending);
                    setFirstFocus(false);
                    setValidation(false)
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            setFirstFocus(true);
        }
    }

    const handleChange = (e) => {
        changePrompt(e.target.value);
    }

    const handleSelect = (e, option) => {
        e.preventDefault();
        changePrompt(option);
    }

    const changePrompt = (value) => {
        firstFocus || setFirstFocus(true);
        setPrompt(value);
    }

    return (
        <section className='form'>
            <form className='form__details'>
                <p className='form__default'>
                    Default Prompts
                </p>
                <div className='form__options'>
                    {getOptions().map(option => {
                        return <button
                            key={uuidv4()}
                            type='button'
                            className='form__choice'
                            onClick={(e) => handleSelect(e, option)}
                            aria-label={option}
                        >
                            {option}
                        </button>
                    })}
                </div>
                <label className='form__label'>
                    Enter Prompt
                    <input
                        type="text"
                        className='form__input'
                        onChange={handleChange}
                        value={prompt}
                        aria-label="enter a prompt"
                        aria-required="true"
                        aria-invalid="true"
                    />
                </label>
                <span className={`form__help ${(!validation && firstFocus) && 'form__help--activated'}`}>
                    <ImWarning /> You must enter more than 3 characters or select a default prompt from above!!
                </span>
                <button
                    className={`form__submit ${!sending || 'form__submit--sending'}`}
                    type='submit'
                    onClick={handleSubmit}
                    disabled={sending}
                    aria-disabled={sending}
                >
                    {sending ? <><VscGear /> processing</> : <><FiSend /> send</>}
                </button>
            </form>
        </section>
    )
}

export default Form
import React, { useState, useEffect } from 'react';
import api from '../../utils/api';
import { useOptions } from '../../hooks/useOptions';
import { ImWarning } from 'react-icons/im';
import { FiSend } from 'react-icons/fi';
import { VscGear } from 'react-icons/vsc';
import './Form.scss';

const Form = ({ addResponse }) => {

    const [prompt, setPrompt] = useState('');
    const [sending, setSending] = useState(false);
    const [validation, setValidation] = useState(false);
    const [firstFocus, setFirstFocus] = useState(false);
    const [options, setOptions] = useOptions();

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

    const handleSelect = (e, option, index) => {
        e.preventDefault();
        changePrompt(option);
        setOptions(index);
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
                    {options.map((option, index) => {
                        return <button
                            key={index}
                            type='button'
                            className='form__choice'
                            onClick={(e) => handleSelect(e, option, index)}
                            aria-label={option}
                        >
                            {option}
                        </button>
                    })}
                </div>
                <label className='form__label'>
                    Enter Prompt
                    <input
                        data-testid="prompt"
                        type="text"
                        className='form__input'
                        onChange={handleChange}
                        value={prompt}
                        aria-label="enter a prompt"
                        aria-required="true"
                        aria-invalid={!validation}
                    />
                </label>
                <span data-testid="warning" className={`form__help ${(!validation && firstFocus) && 'form__help--activated'}`}>
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
import React, { useState } from 'react';
import api from '../../utils/api';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import { FiSend } from 'react-icons/fi';
import { VscGear } from 'react-icons/vsc';
import './Form.scss';

const Form = ({ addResponse }) => {

    const [prompt, setPrompt] = useLocalStorage('prompt', '');
    const [sending, setSending] = useState(false);
    const [validation, setValidation] = useState(false);

    const options = [
        "How does this work",
        "I'm interested in learning more about OpenAI",
        "What is your name"
    ]

    const validate = () => {
        return prompt.length > 2;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setSending(sending => !sending);
            api.getResponse(prompt)
                .then(response => {
                    addResponse({
                        prompt: prompt,
                        response: response.data.choices[0].text
                    })
                })
                .then(_ => {
                    setPrompt('');
                    setSending(sending => !sending);
                })
                .catch(err => {
                    console.log(err);
                })
        } else {

        }

    }

    const handleChange = (e) => {
        setPrompt(e.target.value)
    }

    const handleSelect = (e, option) => {
        e.preventDefault();
        setPrompt(option)
    }

    return (
        <section className='form'>
            <form className='form__details'>
                <p className='form__default'>
                    Default Prompts
                </p>
                <div className='form__options'>
                    {options.map(option => {
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
                <button
                    className={`form__submit ${!sending || 'form__submit--sending'}`}
                    type='submit'
                    onClick={handleSubmit}
                    disabled={sending}
                    aria-disabled={sending}
                >
                    {sending ? <><VscGear/> processing</> : <><FiSend /> send</>}
                </button>
            </form>
        </section>
    )
}

export default Form
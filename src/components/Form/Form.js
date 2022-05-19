import React, {useState} from 'react';
import './Form.scss';
import api from '../../utils/api';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

const Form = ({addResponse}) => {

    const [prompt, setPrompt] = useLocalStorage('prompt', '');
    const [sending, setSending] = useState(false);

    const options = [
        "How does this work?",
        "I'm interested in learning more about OpenAI",
        "What is your name?"
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <label className='form__label'>
                    Enter Prompt
                    <input 
                        type="text" 
                        className='form__input' 
                        onChange={handleChange} 
                        value={prompt}
                    />
                </label>
                <div className='form__options'>
                    {options.map(option => {
                        return <button 
                            key={uuidv4()}
                            type='button' 
                            className='form__choice' 
                            onClick={(e) => handleSelect(e, option)}
                        >
                            {option}
                        </button>
                    })}
                </div>
                <button 
                    className={`form__submit ${!sending || 'form__submit--sending'}`} 
                    type='submit' 
                    onClick={handleSubmit} 
                    disabled={sending}
                >
                    {sending ? 'processing' : 'submit'}
                </button>
            </form>
        </section>
    )
}

export default Form
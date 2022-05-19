import React, {useState} from 'react';
import './Form.scss';
import api from '../../utils/api';

const Form = ({addResponse}) => {

    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        api.getResponse(prompt)
            .then(response => {
                addResponse({
                    prompt: prompt,
                    response: response.data.choices[0].text
                })
            })
            .then(_ => {
                setPrompt('');
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleChange = (e) => {
        setPrompt(e.target.value)
    }

    return (
        <section className='form'>
            <form className='form__details'>
                <label className='form__label'>
                    Enter Prompt
                    <textarea className='form__input' onChange={handleChange} value={prompt}></textarea>
                </label>
                <button className='form__submit' type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default Form
import React from 'react';
import './Form.scss';

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className='form'>
            <form className='form__details'>
                <label className='form__label'>
                    Enter Prompt
                    <textarea className='form__input'></textarea>
                </label>
                <button className='form__submit' type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default Form
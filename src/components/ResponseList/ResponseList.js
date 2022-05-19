import React from 'react';
import Response from '../Response';
import './ResponseList.scss';
import { v4 as uuidv4 } from 'uuid';

const ResponseList = () => {

    const responses = [1, 2, 3, 4, 5];

    const handleDelete = (index) => {
        console.log(index);
    }

    return (
        <section className='response-list'>
            {responses.map((response, index) => <Response key={uuidv4()} response={response} index={index} handleDelete={handleDelete}/>)}
        </section>
    )
}

export default ResponseList
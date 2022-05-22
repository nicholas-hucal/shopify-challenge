import React from 'react';
import Response from '../Response';
import './ResponseList.scss';

const ResponseList = ({responses, deleteResponse}) => {

    const handleDelete = (index) => {
        deleteResponse(index);
    }

    return (
        <section className='response-list'>
            {responses.map((response, index) => <Response 
                    key={index} 
                    response={response} 
                    index={index} 
                    handleDelete={handleDelete}
                />
            )}
        </section>
    )
}

export default ResponseList
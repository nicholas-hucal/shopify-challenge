import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './Response.scss';

const Response = ({response, index, handleDelete}) => {
  return (
    <article className='response'>
      <div className='response__area'>
        <h3 className='response__heading'>Prompt</h3>
        <p className='response__data'>{response.prompt}</p>
      </div>
      <div className='response__area'>
        <h3 className='response__heading'>Response</h3>
        <p className='response__data'>{response.response}</p>
      </div>
      <div className='response__actions'>
        <button 
            className='response__delete' 
            onClick={() => handleDelete(index)} 
            aria-label="delete this prompt"
          >
            <RiDeleteBin6Line /> delete
        </button>
      </div>
    </article>
  )
}

export default Response
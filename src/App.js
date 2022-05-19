import React, {useState} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ResponseList from './components/ResponseList';
import './App.scss';

function App() {

  const [responses, setResponses] = useState([]);

  const addResponse = response => {
    setResponses(responses => [...responses, response])
  }

  const deleteResponse = index => {
    setResponses([...responses].filter((response, i) => i !== index))
  }

  return (
    <main className='app'>
      <Header />
      <Form addResponse={addResponse}/>
      <ResponseList responses={responses} deleteResponse={deleteResponse}/>
    </main>
  );
}

export default App;
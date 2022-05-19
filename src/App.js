import React, {useEffect} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import ResponseList from './components/ResponseList';
import { useLocalStorage, setLocalStorage } from './hooks/useLocalStorage';
import './App.scss';

function App() {

  const [responses, setResponses] = useLocalStorage("responses", [])

  const addResponse = response => {
    setResponses(responses => {
      const newResponses = [...responses];
      newResponses.unshift(response)
      return newResponses
    });
  }

  const deleteResponse = index => {
    setResponses([...responses].filter((response, i) => i !== index))
  }

  useEffect(() => {
    setLocalStorage("responses", responses);
  }, [responses]);

  return (
    <main className='app'>
      <Header />
      <Form addResponse={addResponse}/>
      <ResponseList responses={responses} deleteResponse={deleteResponse}/>
    </main>
  );
}

export default App;
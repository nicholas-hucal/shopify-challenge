import './App.scss';
import Form from './components/Form';
import Header from './components/Header';
import ResponseList from './components/ResponseList';

function App() {
  return (
    <main className='app'>
      <Header />
      <Form />
      <ResponseList />
    </main>
  );
}

export default App;
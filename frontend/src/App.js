import './App.css';

import Api from './components/api';

function Title() {
  return (
    <h1 id='title'>Albums</h1>
  );
}

function App() {
  return (
    <>
      <Title />
      <Api />
    </>
  ); 
}

export default App;

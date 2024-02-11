import './App.css';

import Images from './components/api';

function Title() {
  return (
    <h1 id='title'>Albums</h1>
  );
}

function App() {
  return (
    <>
      <Title />
      <Images />
    </>
  ); 
}

export default App;

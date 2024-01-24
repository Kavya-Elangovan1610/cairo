import logo from './logo.svg';
import './App.css';
import TestClass from './Component/Classcomponent/classtest';
import FuncClass from './Component/functionComponent/functionaltest';
function App() {
  return (
    <div className="App">
      <TestClass></TestClass>
      <header className="App-header">
        <TestClass></TestClass>
        <FuncClass></FuncClass>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

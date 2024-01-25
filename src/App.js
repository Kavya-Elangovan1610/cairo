import logo from './logo.svg';
import './App.css';
// import TestClass from './Component/Classcomponent/classtest';
// import FuncClass from './Component/functionComponent/functionaltest';
// import PropsComponent from './Component/functionComponent/propsComponent';
// import StateComponent from './Component/Classcomponent/stateComponent';
import Navbar from './Component/functionComponent/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Component/functionComponent/contact';
import Login from './Component/functionComponent/Login';
import About from './Component/functionComponent/About';
import Home from './Component/functionComponent/home';
import Footer from './Component/functionComponent/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>

        </Routes>
      </BrowserRouter>
      
      {/* <PropsComponent></PropsComponent> */}
      {/* <TestClass></TestClass> */}
      <header className="App-header">
        {/* <TestClass></TestClass>
        <FuncClass></FuncClass> */}
        {/* <StateComponent></StateComponent> */}
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

      <Footer />
    </div>
  );
}

export default App;

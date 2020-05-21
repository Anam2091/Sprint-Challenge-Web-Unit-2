import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import { Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
  
    <>
    <Route exact path="/" component={Home}/>
    
      <h1>African Marketplace</h1>
      
    </>


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

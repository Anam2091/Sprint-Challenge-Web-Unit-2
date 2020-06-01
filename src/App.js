import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from "./HomePage"
import { Route } from "react-router-dom"
import ListPage from "./ListPage"
import NewItem from "./NewItem"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
  
    <>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/data"  component={ListPage}/>
    <Route exact path ="/new-item" component={NewItem}/>
      
      
    </>


        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
    </div>
  );
}

export default App;

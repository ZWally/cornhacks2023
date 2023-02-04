import React from 'react';
import logo from './logo.svg';
import Banner from './Components/Banner';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Banner username='John Poost'/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

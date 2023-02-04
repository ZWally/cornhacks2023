import React from 'react';
import logo from './logo.svg';
import Banner from './Components/Banner';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Test from './Components/Test';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

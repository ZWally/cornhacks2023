import React from 'react';
import logo from './logo.svg';
import Banner from './Components/Banner';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AppUser from './Types/AppUser';
import MyAppPage from './Components/MyAppsPage/MyAppsPage';



function App() {
  return (
    <MyAppPage/>
  );
}

export default App;

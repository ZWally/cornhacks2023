import React from 'react';
import logo from './logo.svg';
import Banner from './Components/Banner';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AppUser from './Types/AppUser';
import Role from './Types/Role';
import UsersTable from './Components/UsersTable';
import MyAppPage from './Components/MyAppsPage/MyAppsPage';
import AppPage from './Components/AppPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyAppPage />}/>
        <Route path="/app/:appId" element={<AppPage />}/>
        <Route path="/app/:appId/permissions" element={<div>app page - permissions tab</div>}/>
        <Route path="/app/:appId/users" element={<div>app page - users tab</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

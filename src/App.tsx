import React from 'react';
import logo from './logo.svg';
import Banner from './Components/Banner';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import UsersTable from './Components/UsersTable';
import AppUser from './Types/AppUser';
import Role from './Types/Role';

const dummyUsers: AppUser [] = [
  {
    id: "1",
    authId: "John Poost",
    roleId: "1"
  },
  {
    id: "2",
    authId: "Rooy Dummy",
    roleId: "1"
  },
  {
    id: "3",
    authId: "Zach Wallemnerbg",
    roleId: "1"
  },
  {
    id: "4",
    authId: "Lanmdry Geibger",
    roleId: "1"
  },
]

const dummyRoles: Role [] = [
  {
    id: "1",
    name: "Admin",
    permissionIds: []
  }
]

function App() {
  return (
    <>
    <UsersTable roles={dummyRoles} users={dummyUsers}/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>homepage - myapps</div>}/>
        <Route path="/app/:appId" element={<div>app page</div>}/>
        <Route path="/app/:appId/permissions" element={<div>app page - permissions tab</div>}/>
        <Route path="/app/:appId/users" element={<div>app page - users tab</div>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

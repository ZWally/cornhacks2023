import Banner from './Components/Banner';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AppUser from './Types/AppUser';
import Role from './Types/Role';
import UsersTable from './Components/UsersTable';
import { AuthProvider } from './Contexts/Authorization';

function App() {
  return (
    <AuthProvider>
      <Banner/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>homepage - myapps</div>}/>
          <Route path="/app/:appId" element={<div>app page</div>}/>
          <Route path="/app/:appId/permissions" element={<div>app page - permissions tab</div>}/>
          <Route path="/app/:appId/users" element={<div>app page - users tab</div>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

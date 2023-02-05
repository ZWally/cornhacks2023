import Banner from './Components/Banner';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AppUser from './Types/AppUser';
import Role from './Types/Role';
import UsersTable from './Components/UsersTable';
import MyAppPage from './Components/MyAppsPage/MyAppsPage';
import AppPage from './Components/AppPage';

import { AuthProvider } from './Contexts/Authorization';

function App() {
  return (
    <AuthProvider>
      <Banner/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyAppPage />}/>
        <Route path="/app/:appId" element={<AppPage />}/>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

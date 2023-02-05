import Banner from './Components/Banner';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AppUser from './Types/AppUser';
import Role from './Types/Role';import NewApplicationModal from './Components/NewAppModal';
import { Console } from 'console';
import UsersTable from './Components/UsersTable';
import MyAppPage from './Components/MyAppsPage/MyAppsPage';
import AppPage from './Components/AppPage';
import { AuthProvider } from './Contexts/Authorization';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Banner/>
      <div style={{display: 'flex', justifyContent: 'center', width: '100vw'}}>
        <div style={{maxWidth: 1200, width: "100%"}}>
      <Routes>
        <Route path="/" element={<MyAppPage />}/>
        <Route path="/app/:appId" element={<AppPage />}/>
      </Routes>
        </div>
      </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

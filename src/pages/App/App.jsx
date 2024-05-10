import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ?
      <> 
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          {/* Route components in here */}
          <Route />
          <Route />
        </Routes>
      </> 
        : 
        <Routes>
        {/* Route components in here */}
        <Route path="/" element={<HomePage setUser={setUser} />} />
        <Route path="/auth" element={<AuthPage setUser={setUser} />} />
      </Routes>
        
      }
    </main>
  );
}

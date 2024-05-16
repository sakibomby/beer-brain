import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import AuthPage from '../AuthPage/AuthPage';
import BeerListPage from  '../BeerListPage/BeerListPage';
import MyBeerListPage from  '../MyBeerListPage/MyBeerListPage';
import NewBeerPage from '../NewBeerPage/NewBeerPage';
import NavBar from '../../components/NavBar/NavBar';
import './App.css';
import FlashCardPage from '../FlashCardPage/FlashCardPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  
  return (
    <main className="App">
      { user ?
      <> 
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/beers" element={<BeerListPage user={user} />} />
          <Route path="/mybeerlist" element={<MyBeerListPage />} />
          <Route path="/flashcards" element={<FlashCardPage />} />
          <Route path="/new-beer" element={<NewBeerPage />} />
          <Route path="/*" element={<Navigate to="/beers" />} />
          <Route />
        </Routes>
      </> 
        : 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
        
      }
    </main>
  );
}

import React from 'react'
import { PlayerForm } from './components/PlayerForm';
import { Header } from './components/Header';
import { GlobalProvider } from './context/GlobalState';

import './App.css';
import { StatGrid } from './components/StatGrid';
function App() {
  return (
      <GlobalProvider>
        <Header />
        <div className = 'formContainer'>
          <PlayerForm />
        </div>
          <StatGrid />
      </GlobalProvider>
  );
}

export default App;

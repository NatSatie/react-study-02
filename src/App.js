import React from 'react'
import './App.css';
import Loja from './components/Loja'
import {GlobalStorage} from './GlobalContext'

function App() {
  return (
    <GlobalStorage>
      <Loja />
    </GlobalStorage>
  );
}

export default App;

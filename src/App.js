import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import User from './components/user';
import Confetti from './components/confetti';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< User />}></Route>
        <Route path='/user/:id' element={< Confetti />}></Route>       
      </Routes>
      
    </div>
  );
}

export default App;

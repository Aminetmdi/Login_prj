import React from 'react';
import './App.css';
import { Routes , Route , Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';

const App = () => {
  
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="*"element={<Navigate to="/signup" replace />} />
      </Routes>
    </div>
  );
};

export default App;
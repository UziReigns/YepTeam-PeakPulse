import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Routes>
            <Route path='/' Component={HomePage}/>
        </Routes>
    </Router>
       
        
    </>
  );
}

export default App;

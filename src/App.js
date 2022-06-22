import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";
import Login from './components/Login/Login';

function App() {

  const user = null;

  return (
    <div className="App">
      <Routes>
        {!user ? (
          <Route exact path='/' element={<> <Login /> </>} />
        ) : (
          <Route exact path='/' element={<> <HomeScreen /> </>} />

        )}

      </Routes>
    </div>


  );
}

export default App;

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Notification from './Notification';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Notification />} />
      <Route path={'/about'} element={<About />} />
      <Route path={'/contact'} element={<Contact />} />
    </Routes>
  );
}

export default App;

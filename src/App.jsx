import React from 'react';

import Navbar from './Navbar';
import Catalog from './Catalog';
import News from './News';
import Contact from './Contact';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/catalog" replace />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;

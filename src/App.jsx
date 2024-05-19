import React from "react";
import Header from './components/Header';
import Home from './components/Home'
import Catalog from './components/Catalog';
import Pricing from './components/Pricing'
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import './index.css'

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App

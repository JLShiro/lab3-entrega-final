import React from "react";
import Header from './components/Header';
import Home from './components/Home'
import Catalog from './components/Catalog';
import Pricing from './components/Pricing'
import Options from './components/Options'
import Survey from './components/Survey'
import News from './components/News'
import AboutUs from './components/AboutUs'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Profile from './components/Profile'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
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
          <Route path="/options" element={<Options />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/news" element={<News />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App

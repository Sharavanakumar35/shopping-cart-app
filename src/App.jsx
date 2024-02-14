import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Shopping from './components/Shopping';
import Footer from './components/Footer';

const App = () => {
  const [cartValue, setCartValue] = useState(0);

  const addToCart = () => {
    setCartValue(prevValue => prevValue + 1);
  };

  const removeFromCart = () => {
    setCartValue(prevValue => prevValue - 1);
  };

  return (
    <>
      <Navbar cartValue={cartValue} />
      <Header />
      <Shopping addToCart={addToCart} removeFromCart={removeFromCart}/>
      <Footer />
    </>
  );
};

export default App;
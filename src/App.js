import React from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './HOMEPAGE/Homepage';
import TopHeader from './HOMEPAGE/Top header/TopHeader';
import BottomHeader from './HOMEPAGE/Bottom header/BottomHeader';
import Footer from './HOMEPAGE/Footer/Footer';

function App() {
  return (
    <div>
      <TopHeader />
      <BottomHeader />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;

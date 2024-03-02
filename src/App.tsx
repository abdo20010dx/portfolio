import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './common/appbar';
import Home from './components/home';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Home />
    </>
  );
}

export default App;

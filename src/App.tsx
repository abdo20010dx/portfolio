import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './common/appbar';
import Home from './components/home/home';
import Certificates from './components/certificates/certificates';
import Footer from './common/footer';

function App() {
  return (
    <HashRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route
          path={'/'}
          element={<Home />}
        />
        <Route
          path={'/home'}
          element={<Home />}
        />
        <Route
          path={'/certificates'}
          element={<Certificates />}
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

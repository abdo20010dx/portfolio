import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './common/appbar';
import Home from './components/home/home';
import Certificates from './components/certificates/certificates';
import Footer from './common/footer';
import ExampleProjects from './components/exmaple-projects/example-projects';
import LiveProjects from './components/live-projects/live-projects';
import PostDetails from './components/postDetails/postDetails';

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
        <Route
          path={'/example projects'}
          element={<ExampleProjects />}
        />
        <Route
          path={'/live projects'}
          element={<LiveProjects />}
        />
        <Route
          path={'/postDetails/:postId'}
          element={<PostDetails />}
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;

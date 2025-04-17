import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'animate.css';
import { WOW } from 'wowjs';  // Changed to named import
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Notfound from './Components/Notfound';

function App() {
  useEffect(() => {
    new WOW().init();  // Initialize inside useEffect for proper timing
  }, []);

  const routers = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "*", element: <Notfound /> },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}

export default App;
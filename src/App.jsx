import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'animate.css';
import WOW from 'wowjs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Notfound from './Components/Notfound';

function App() {
  new WOW.WOW().init();


  const routers = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "*", element: <Notfound /> },
  ]);


  return (
    <>
      <RouterProvider router={routers} />

    </>
  )
}

export default App

import { useEffect } from 'react';
import './App.css';
import 'animate.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Notfound from './Components/Notfound';

function App() {
  useEffect(() => {
    // Dynamic import to handle SSR and module compatibility
    const initializeWOW = async () => {
      if (typeof window !== 'undefined') { // Ensure we're on client-side
        const { WOW } = await import('wowjs');
        new WOW({
          offset: 100,
          mobile: true,
          live: true
        }).init();
      }
    };
    initializeWOW();
  }, []);

  const routers = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "*", element: <Notfound /> },
  ]);

  return <RouterProvider router={routers} />;
}

export default App;
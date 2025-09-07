import { useEffect } from 'react';
import './App.css';
import './fonts.css';
import 'animate.css';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Notfound from './Components/Notfound';
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CategoryServices from './Components/CategoryServices';
import ServiceDetails from './Components/ServiceDetails';
import Layout from './Components/Layout';
import { InfoIcon } from 'lucide-react';
import Info from './Components/Info';

<Helmet>
  <title>Sehtnaa | Home Medical Services at Your Doorstep</title>
  <meta name="description" content="Get professional nurses and medical assistance directly at your home. Sehtnaa offers reliable, secure, and fast healthcare at your convenience." />

  {/* Open Graph Tags for social media sharing */}
  <meta property="og:title" content="Sehtnaa | Trusted Home Medical Services" />
  <meta property="og:description" content="Book certified nurses to your home with just a few clicks. Sehtnaa connects you to quality medical services instantly." />
  <meta property="og:image" content="https://sehtnaa.com/images/og-image.jpg" />
  <meta property="og:url" content="https://sehtnaa.com/" />
  <meta property="og:type" content="website" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://sehtnaa.com/" />

  {/* Robots meta tag */}
  <meta name="robots" content="index, follow" />
</Helmet>

function App() {


  const routers = createBrowserRouter([
    // { path: "/", errorElement: <Notfound />, element: <Home /> },
    { path: "/", element: <Layout><Home /></Layout> },
    { path: "/home", element: <Layout><Home /></Layout> },
    { path: "/category/:categoryId", element: <Layout><CategoryServices /></Layout> },
    { path: "/service/:serviceId", element: <Layout><ServiceDetails /></Layout> },
    { path: "/info", element: <Layout><Info /></Layout> },
    { path: "*", element: <Notfound /> },
  ]);

  let query = new QueryClient()

  return <>
    <QueryClientProvider client={query}>
      <RouterProvider router={routers} />
    </QueryClientProvider>
  </>;
}

export default App;
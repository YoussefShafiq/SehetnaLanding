import React, { useEffect } from 'react'
import notFoundAnimation from '../assets/images/404 error with a tired person-pana.svg'
import { Helmet } from 'react-helmet'
import Layout from './Layout'
import { useNavigate } from 'react-router-dom'

// Inside your Notfound component
<Helmet>
  <title>Page Not Found | Sehtnaa</title>
  <meta name="robots" content="noindex" />
  <meta name="description" content="The page you're looking for doesn't exist." />
</Helmet>
export default function Notfound() {
  const navigate = useNavigate();
  useEffect(() => {

    window.__STATUS__ = 404;

  }, []);
  return <>

    <Layout >
      <div className="h-[calc(100vh-125px)] flex flex-col items-center justify-center gap-3">
        <h1 className='text-2xl font-bold'>Page Not Found | Sehtnaa</h1>
        <button onClick={() => navigate('/')} className='bg-primary hover:bg-secondary transition-all text-white  py-1 px-2 rounded-xl' >Go home</button>
      </div>
    </Layout>

  </>
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import WhatWeDo from './components/WhatWeDo';
import {About, Landing, HomeLayout, Contact } from './pages/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        index: true,
        element: <Landing />,
      },
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;

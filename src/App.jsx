import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {About, Landing, HomeLayout, Contact, MoreDetails, Pricing } from './pages/index.js'

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
        path: '/details',
        element: <MoreDetails /> ,
      },
      {
        path: '/pricing',
        element: <Pricing />,
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

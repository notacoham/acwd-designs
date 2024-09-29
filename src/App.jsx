import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {About, Landing, HomeLayout, Contact, Mobile, SEO } from './pages/index.js'

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
        path: '/mobile',
        element: <Mobile />,
      },
      {
        path: '/seo',
        element: <SEO />,
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

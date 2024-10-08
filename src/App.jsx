import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

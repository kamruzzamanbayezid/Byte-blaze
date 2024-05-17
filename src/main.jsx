import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs'
import Bookmarks from './Pages/Bookmarks/Bookmarks'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        // index: true,
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs />
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

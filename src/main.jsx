import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs'
import Bookmarks from './Pages/Bookmarks/Bookmarks'
import BlogDetails from './Pages/BlogDetails/BlogDetails';
import Content from './Components/Content/Content';
import Author from './Components/Author/Author';
import { Toaster } from 'react-hot-toast';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import AuthProvider from './Provider/AuthProvider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

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
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=10')
      },
      {
        path: '/blog/:blogId',
        element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.blogId}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.blogId}`),
          },
          {
            path: 'author',
            element: <Author />,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.blogId}`),
          }
        ],
      },
      {
        path: '/bookmarks',
        element: <Bookmarks />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=10')
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      }
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  </React.StrictMode>,
)

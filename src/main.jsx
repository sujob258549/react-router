import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './component/About/About';
import Home from './component/Home/Home';
import Contact from './component/Contact/Contact';
import User from './component/User/User';
import Comments from './component/Commenst/Comments';
import ShowDetails from './component/User/ShowDetails';
import ShowAllcomments from './component/Commenst/ShowAllcomments';
import Errorpage from './component/Errorjpage/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },

      {
        path: '/comment',
        loader: () => fetch('https://jsonplaceholder.typicode.com/comments'),
        element: <Comments></Comments>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path : '/user/:userid',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.userid}`),
        element : <ShowDetails></ShowDetails>
        

      },
      {
        path: '/com/:commentid',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentid}`),
        element: <ShowAllcomments></ShowAllcomments>
      }
    ]
  },




]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

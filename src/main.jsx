import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Root from './routes/Root.jsx';
import RootContext from './context/RootContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
  },{
    path: "/login",
    element: <Login/>,
  },{
    path: "/register",
    element: <Register/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RootContext>
    <RouterProvider router={router} />
</RootContext> 
  </React.StrictMode>,
)

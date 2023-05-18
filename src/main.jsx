import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
)

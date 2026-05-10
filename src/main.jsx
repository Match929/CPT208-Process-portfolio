import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Prototype from './pages/Prototype.jsx'
import ClimbLinkAlgorithmDocument from './pages/SmartPartner.jsx'
import UserManual from './pages/UserManual.jsx'
import Experimentaldetails from './pages/Experimentaldetails.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'prototype',
        element: <Prototype />
      },
      {
        path: 'smartpartner',
        element: <ClimbLinkAlgorithmDocument />
      },
      {
        path: 'usermanual',
        element: <UserManual />
      },
      {
        path: 'uted',
        element: <Experimentaldetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
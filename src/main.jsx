import React from 'react';
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Homepage, Dotfiles } from './pages/index.jsx'
import Navbar from './components/navbar.jsx'
import './main.css'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "dots",
        element: <Dotfiles />
      }
    ]
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

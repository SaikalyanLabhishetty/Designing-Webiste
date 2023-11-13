import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Service from './components/Service';
import AppContact from './components/AppContact';
import AppCareer from './components/AppCareer';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Service",
    element: <Service/>,
  },
  {
    path: "AppCareer",
    element: <AppCareer/>
  },
  {
    path: "AppContact",
    element: <AppContact/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);





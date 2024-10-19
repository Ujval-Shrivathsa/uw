import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: "/uw",  // Base path
    element: <App />,
    children: [
      {
        path: "about", 
        element: <About />,
      },
      {
        path: "work", 
        element: <Work />,
      },
      {
        path: "contact", 
        element: <Contact />,
      },
    ],
  },
]);

export default router;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

let Pages = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: "*",
    element: <NotFound />
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={Pages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

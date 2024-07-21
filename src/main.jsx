import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router/AppRoute.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './scrollbar.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
    <ToastContainer />
  </React.StrictMode>,
)

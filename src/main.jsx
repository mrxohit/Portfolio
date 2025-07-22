// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Navbar from './components/Navbar';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode  >
   <Navbar />

    <div className='content-layer '>

    <App />
    </div>
  </React.StrictMode>,
);

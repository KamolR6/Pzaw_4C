import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CssIndex.css';
import App from './App';
import TaskPokedex from './TaskPokedex';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskPokedex></TaskPokedex>
  </React.StrictMode>
);

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CssIndex.css';
import App from './App';
import TaskPokedex from './TaskPokedex';
import TaskTanstackForm from './TaskTanstackForm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskTanstackForm></TaskTanstackForm>
  </React.StrictMode>
);

// reportWebVitals();

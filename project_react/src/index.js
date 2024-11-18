import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FirstComponent from './FirstComponent';
import Form from './Form';
import FirstTable from './FirstTable';
import FirstRow from './FirstRow';
import AxiosExample from './AxiosExample';
import TaskFormWithBackend from './18_11_Task';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstComponent /> */}
    {/* <Form /> */}
    {/* <FirstTable />
    <FirstRow /> */}
    {/* <AxiosExample></AxiosExample> */}
    <TaskFormWithBackend></TaskFormWithBackend>
  </React.StrictMode>
);

// reportWebVitals();

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstComponent /> */}
    {/* <Form /> */}
    {/* <FirstTable />
    <FirstRow /> */}
    <AxiosExample></AxiosExample>
  </React.StrictMode>
);

// reportWebVitals();

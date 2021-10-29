import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ResultContextProvider } from './components/contexts/ResultContextProvider';



ReactDOM.render(
  <ResultContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ResultContextProvider>,
  document.getElementById('root')
);


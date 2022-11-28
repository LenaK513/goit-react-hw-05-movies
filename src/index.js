import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <React.StrictMode>
      <Suspense fallback={<div>Loading... </div>}>
        <App />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);

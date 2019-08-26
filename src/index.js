import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

const appJsx = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'));

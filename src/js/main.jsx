import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './Home';

import TrafficLight from './components/Signals';

ReactDOM.createRoot(document.getElementById('main')).render(
    <React.StrictMode>
        < Home />
    </React.StrictMode>
);
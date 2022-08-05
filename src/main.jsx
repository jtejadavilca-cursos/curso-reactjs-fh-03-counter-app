import React from 'react';
import ReactDOM from 'react-dom/client';

import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';
//import { HelloWorldApp } from './HelloWorldApp';

import './css/styles.css'

ReactDOM.createRoot( document.getElementById( 'root' ) )
.render(
    <React.StrictMode>
        <CounterApp value={10} />

        {/* <FirstApp title="Hola, soy Goku" /> */}
    </React.StrictMode>
);
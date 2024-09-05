import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route,Routes } from 'react-router-dom';


import {App} from './landing';
import { Loguin } from './loguin';
import { Registro } from './registro';


ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='loguin' element={<Loguin/>}/>
            <Route path='registro' element={<Registro/>}/>
        </Routes>
        </BrowserRouter>
        
    </React.StrictMode>
)
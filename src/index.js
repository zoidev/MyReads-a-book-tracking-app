import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
//import BrowserRouter and wrap the whole app in this component 
//so the <Route> can work properly
ReactDOM.render(   <BrowserRouter>
     					<App />
   				   </BrowserRouter>
                , document.getElementById('root'))

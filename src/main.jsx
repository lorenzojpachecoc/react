//import React from 'react'
import ReactDOM from 'react-dom/client'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css'
import { BrowserRouter} from 'react-router-dom';
//import { AddUserButton } from './components/pages/AddUserButton.jsx';
//import { DetailsUser } from './components/pages/DetailsUser.jsx';
//import { EditUser } from './components/pages/EditUser.jsx';
import { CrudApp } from './CrudApp.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <CrudApp />
    </BrowserRouter>
 
)

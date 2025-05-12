import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Outlet } from "react-router";
import './index.css'
import App from './App.jsx'
import { Hearder } from './component/header/header.jsx';
import UserContextProvider from './component/header/context/provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Hearder/>
    <UserContextProvider>
    <Outlet/>
    <App />
    </UserContextProvider>
  </BrowserRouter>
  </StrictMode>,
)

import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import './index.css'
import App from './App.jsx'
import  Wallet from './components/Wallet.jsx';
import Home from './components/Home.jsx';

const router= createBrowserRouter([
  {element:<App/>,
children:[
  {element:<Home/>, path:'/'},
  {element:<Wallet/>, path:'/wallet'}
]}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createContext,useState } from 'react'; 
import './index.css'
import App from './App.jsx'
import  Wallet from './components/Wallet.jsx';
import SplashScreen from './components/SplashScreen.jsx';
import Dashboard from './components/Dashboard.jsx';
import SendToken from './components/SendToken.jsx';
import SendToken1 from './components/SendToken1.jsx';
import SendToken2 from './components/SendToken2.jsx';

export const myContext = createContext();

const router= createBrowserRouter([
  {element:<App/>,
children:[
  {element:<SplashScreen/>, path:'/'},
  {element:<Wallet/>, path:'/wallet'},
  {element:<Dashboard/>,path:'/dashboard'},
 {element:<SendToken/>,path:'/sendtoken'},
 {element:<SendToken1/>,path:'/sendtoken1'},
 {element:<SendToken2/>,path:'/sendtoken2'},
]}
])

const Main=()=>{
  const [wallet, setWallet] = useState(null);
  return(
    <StrictMode>
      <myContext.Provider value={{value:[wallet,setWallet]}}>
        <RouterProvider router={router} />
      </myContext.Provider>
    </StrictMode>
  )
}
createRoot(document.getElementById('root')).render(
  <Main/>
)

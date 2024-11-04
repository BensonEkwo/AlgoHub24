
import { Outlet } from "react-router-dom"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    
    Telegram.WebApp.ready();
    
    document.body.style.backgroundColor = "#ffffff";

    Telegram.WebApp.onEvent('themeChanged', () => {
      document.body.style.backgroundColor = "#ffffff";
    });

    return () => {
      Telegram.WebApp.offEvent('themeChanged');
    };
  }, []);
  return (
    <>
    <Outlet/>
    </>
  )
}

export default App


import { Outlet } from "react-router-dom"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    // Check if Telegram is defined
    if (typeof Telegram !== 'undefined' && Telegram.WebApp) {
      Telegram.WebApp.ready();
      
      // Set initial background color
      document.body.style.backgroundColor = "#ffffff";

      // Listen for theme changes
      Telegram.WebApp.onEvent('themeChanged', () => {
        document.body.style.backgroundColor = "#ffffff";
      });

      // Cleanup the event listener when component unmounts
      return () => {
        Telegram.WebApp.offEvent('themeChanged');
      };
    } else {
      console.warn("Telegram WebApp is not available in this environment.");
    }
  }, []);
  return (
    <>
    <Outlet/>
    </>
  )
}

export default App

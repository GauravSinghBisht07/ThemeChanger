import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/Theme"
import Themebutton from "./components/Themebutton"
import Card from "./components/Card"


function App() {

  const [themeMode,setthemeMode]= useState("light")

  const darkTheme = ()=>{
    setthemeMode("dark")
  }
  const lightTheme = ()=>{
    setthemeMode("light")
  }

  // change in theT
  useEffect(()=>{
    document.querySelector("html").classList.remove("light","dark")
    document.querySelector("html").classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center bg-gray-500">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Themebutton/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                  {<Card/>}
              </div>
          </div>
      </div>
      </ThemeProvider>
    
  )
}

export default App

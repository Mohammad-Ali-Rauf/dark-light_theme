import { useState } from "react";
import themeContext from "./themeContext";

const ThemeState = ({ children }) => {

    const [theme, setTheme] = useState('dark')

  return (
    <themeContext.Provider value={{
        theme,
        setTheme
    }}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeState
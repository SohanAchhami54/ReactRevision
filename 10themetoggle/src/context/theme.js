import { createContext, useContext } from "react"

const ThemeContext=createContext({
    thememode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeContextProvider=ThemeContext.Provider 

export const useTheme=()=>{
    return useContext(ThemeContext)
}
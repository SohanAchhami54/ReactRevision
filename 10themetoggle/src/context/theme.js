import React, { createContext, useContext } from "react";

const Themecontext=createContext({
    thememode:'light',
    darktheme:()=>{},
    lighttheme:()=>{}
})

export const ThemeProvider=Themecontext.Provider

export const useTheme=()=>{
    return  useContext(Themecontext)
}
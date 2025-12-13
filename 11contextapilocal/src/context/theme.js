import React, { useContext } from "react";
const Themecontext=React.createContext({
    thememode:'light',
    lighttheme:()=>{},
    darktheme:()=>{}
})

export const Themeprovider=Themecontext.Provider

export const useTheme=()=>{
    return useContext(Themecontext)
}
import { createContext, useContext, useState } from "react";

const AppContext=createContext()
const AppProvider=({children})=>{
    const [isSmalSideBarOpen,setIsSmallSidebarOpen]=useState(false)
    const openSideBar=()=>{setIsSmallSidebarOpen(true)}
    const closeSideBar=()=>{setIsSmallSidebarOpen(false)}
    return(
        <AppContext.Provider value={{isSmalSideBarOpen,openSideBar,closeSideBar}}>
            {children}
        </AppContext.Provider>
    )
}
export const useAppContext=()=>useContext(AppContext)
export default AppProvider
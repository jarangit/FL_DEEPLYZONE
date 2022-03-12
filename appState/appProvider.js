import {useState, createContext} from "react";

export const AppProviderContext = createContext()

const AppProvider = (props) => {
  const [openSideMenuAdmin, setopenSideMenuAdmin] = useState(false)

  return (
    <AppProviderContext.Provider value={[
      openSideMenuAdmin, setopenSideMenuAdmin,
    ]}>
      {props.children}
    </AppProviderContext.Provider>
  )
}

export default AppProvider
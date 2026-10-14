
import { createContext } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const username = "Mariam";

  return (
    <AppContext.Provider value={{ username }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

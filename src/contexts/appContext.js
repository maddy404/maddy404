import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [response, setResponse] = useState([]);
  const [path, setPath] = useState("/");

  return (
    <AppContext.Provider value={{ response, setResponse, path, setPath }}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => {
  return useContext(AppContext);
};

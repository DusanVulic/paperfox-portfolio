import React, { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <AppContext.Provider value={{ scrollToTop }}>
      {children}
    </AppContext.Provider>
  );
};

//custom context hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

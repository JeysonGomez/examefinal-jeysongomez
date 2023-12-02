import React, { createContext, useState, useMemo } from 'react';

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const [globalState, setglobalState] = useState('');

  const updateState = (newValue) => {
    setglobalState(newValue);
  };


    return (
    <ContextGlobal.Provider value={{contextValue}}>
      {children}
    </ContextGlobal.Provider>
  );
};

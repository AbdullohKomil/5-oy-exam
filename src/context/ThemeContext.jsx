import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setThemee] = useState(localStorage.getItem('theme') || '');

  return (
    <ThemeContext.Provider value={{ theme, setThemee }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { createContext, useContext } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ color: 'blue' }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeContext, ThemeProvider, useTheme };

import { createContext, useReducer } from 'react';

const ThemeContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249c',
    mode: 'light',
  });

  function changeColor(color) {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  }

  function changeMode(mode) {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

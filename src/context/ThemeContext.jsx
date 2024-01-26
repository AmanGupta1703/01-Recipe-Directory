import { createContext, useReducer } from 'react';

const ThemeContext = createContext();

function themeReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { color: 'blue' });

  function changeColor(color) {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

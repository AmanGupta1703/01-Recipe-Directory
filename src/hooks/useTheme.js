import { useContext } from 'react';

import { ThemeContext } from './../context/ThemeContext.jsx';

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error('useTheme() must be used inside a Provider.');
  }

  return context;
}

export { useTheme };

// custom hook
import { useTheme } from '../hooks/';

// icon
import { ModeIcon } from './../assets';

// styles
import './ThemeSelector.css';

// color list
const themeColors = ['#58249c', '#249c6b', '#b70233'];

function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  function toggleMode() {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  }

  return (
    <div className='theme-selector'>
      <div className='mode-toggle'>
        <img
          src={ModeIcon}
          alt='dark/light toggle icon'
          onClick={toggleMode}
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
      <div className='theme-buttons'>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;

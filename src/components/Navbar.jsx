import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';

// context
import { useTheme } from './../context/ThemeContext';

// styles
import './Navbar.css';

function Navbar() {
  const { color } = useTheme();

  return (
    <div className='navbar' style={{ backgroundColor: color }}>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
}

export default Navbar;

import { Link } from 'react-router-dom';

// components
import SearchBar from './SearchBar';

// custom hooks
import { useTheme } from './../hooks/useTheme';

// styles
import './Navbar.css';

function Navbar() {
  const { color } = useTheme();

  return (
    <div className='navbar' style={{ background: color }}>
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

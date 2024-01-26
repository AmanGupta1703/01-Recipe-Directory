import { useSearchParams } from 'react-router-dom';

// custom hooks
import { useFetch } from '../../hooks/useFetch';

// components
import { RecipeList } from '../../components';

// styles
import './Search.css';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');

  const { data, error, isPending } = useFetch('http://localhost:3000/recipes');

  if (error) {
    return <p className='error'>{error}</p>;
  }

  if (isPending) {
    return <p className='loading'>Loading...</p>;
  }

  if (data) {
    const searchResultRecipe = data.filter((item) => {
      return item.title.toLowerCase().includes(query.toLowerCase());
    });
    return (
      <div>
        <h2 className='page-title'>Recipes including "{query}"</h2>
        <RecipeList recipes={searchResultRecipe} />
      </div>
    );
  }
}

export default Search;

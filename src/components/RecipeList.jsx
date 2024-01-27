import { Link } from 'react-router-dom';

// custom hook
import { useTheme } from '../hooks/';

// styles
import './RecipeList.css';

function RecipeList({ recipes }) {
  if (!recipes.length) {
    return <div className='error'>No recipes to load...</div>;
  }

  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}

function Recipe({ recipe }) {
  const { mode } = useTheme();

  return (
    <div className={`card ${mode}`}>
      <h3>{recipe.title}</h3>
      <p>{recipe.cookingTime} to make.</p>
      <div>{recipe.method.substring(0, 100)}...</div>
      <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
    </div>
  );
}

export default RecipeList;

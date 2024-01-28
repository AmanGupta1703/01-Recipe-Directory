import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// custom hook
import { useTheme } from '../../hooks/';

// styles
import './Recipe.css';

// db
import { projectFirestore } from '../../firebase/config';

function Recipe() {
  const { id } = useParams();

  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(
    function () {
      setIsPending(true);

      projectFirestore
        .collection('recipes')
        .doc(id)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            setIsPending(false);
            setRecipe({ ...doc.data() });
          } else {
            setIsPending(false);
            setError('Could not find that recipe.');
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    [id]
  );

  if (error) {
    return <p className='error'>{error}</p>;
  }

  if (isPending) {
    return <p className='loading'>Loading...</p>;
  }

  if (recipe) {
    return (
      <div className={`recipe ${mode}`}>
        <h2 className='page-title'>{recipe.title}</h2>
        <p>Takes {recipe.cookingTime} to cook.</p>
        <ul>
          {recipe.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
        <p className='method'>{recipe.method}</p>
      </div>
    );
  }
}

export default Recipe;

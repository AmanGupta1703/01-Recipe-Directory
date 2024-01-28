import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// styles
import './Create.css';

// db
import { projectFirestore } from './../../firebase/config';

function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  // ingredients
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);

  // selecting the DOM input element
  const ingredientsInput = useRef(null);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      title,
      method,
      cookingTime: `${cookingTime} minutes`,
      ingredients,
    };
    try {
      await projectFirestore.collection('recipes').add(newRecipe);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  function handleAdd(e) {
    e.preventDefault();

    if (!newIngredient) {
      return;
    }

    if (ingredients.includes(newIngredient)) {
      setNewIngredient('');
      return;
    }

    setIngredients((prevIng) => [...prevIng, newIngredient.trim()]);
    setNewIngredient('');
    ingredientsInput.current.focus();
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients:</span>
          <div className='ingredients'>
            <input
              ref={ingredientsInput}
              type='text'
              value={newIngredient}
              onChange={(e) => setNewIngredient(e.target.value)}
            />
            <button onClick={handleAdd} className='btn'>
              add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:
          {ingredients.map((ing) => (
            <em key={ing}>{ing}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            required></textarea>
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type='number'
            value={cookingTime}
            onChange={(e) => setCookingTime(e.target.value)}
            required
          />
        </label>

        <button className='btn'>submit</button>
      </form>
    </div>
  );
}

export default Create;

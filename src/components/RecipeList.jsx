import { Link } from "react-router-dom";

// styles
import "./RecipeList.css";

function RecipeList({ recipes }) {
	if (!recipes.length) {
		return <div className="error">No recipes to load...</div>;
	}

	return (
		<div className="recipe-list">
			{recipes.map((recipe) => (
				<Recipe recipe={recipe} key={recipe.id} />
			))}
		</div>
	);
}

function Recipe({ recipe }) {
	return (
		<div className="card">
			<h3>{recipe.title}</h3>
			<p>{recipe.cookingTime} to make.</p>
			<div>{recipe.method.substring(0, 100)}...</div>
			<Link to={`/recipes/${recipe.id}`}>Cook This</Link>
		</div>
	);
}

export default RecipeList;

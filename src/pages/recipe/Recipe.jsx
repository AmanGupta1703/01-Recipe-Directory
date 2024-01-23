import { useParams } from "react-router-dom";

// custom hook
import { useFetch } from "../../hooks/useFetch";

// styles
import "./Recipe.css";

function Recipe() {
	const { id } = useParams();

	const {
		data: recipe,
		error,
		isPending,
	} = useFetch(`http://localhost:3000/recipes/${id}`);

	if (error) {
		return <p className="error">{error}</p>;
	}

	if (isPending) {
		return <p className="loading">Loading...</p>;
	}

	if (recipe) {
		return (
			<div className="recipe">
				<h2 className="page-title">{recipe.title}</h2>
				<p>Takes {recipe.cookingTime} to cook.</p>
				<ul>
					{recipe.ingredients.map((ing) => (
						<li key={ing}>ing</li>
					))}
				</ul>
				<p className="method">{recipe.method}</p>
			</div>
		);
	}
}

export default Recipe;

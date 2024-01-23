import { useState } from "react";

// styles
import "./Create.css";

function Create() {
	const [title, setTitle] = useState("");
	const [method, setMethod] = useState("");
	const [cookingTime, setCookingTime] = useState("");

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className="create">
			<h2 className="page-title">Add a New Recipe</h2>

			<form onSubmit={handleSubmit}>
				<label>
					<span>Recipe title:</span>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</label>

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
						type="number"
						value={cookingTime}
						onChange={(e) => setCookingTime(e.target.value)}
						required
					/>
				</label>

				<button className="btn">submit</button>
			</form>
		</div>
	);
}

export default Create;

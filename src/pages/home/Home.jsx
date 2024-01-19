// custom hook
import { useFetch } from "../../hooks/useFetch";

// styles
import "./Home.css";

function Home() {
	const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

	return (
		<div className="home">
			{error && <p className="error">{error}</p>}
			{isPending && <p className="loading">Loading...</p>}
			{data && data.map((recipe) => <div key={data.id}>{recipe.title}</div>)}
		</div>
	);
}

export default Home;

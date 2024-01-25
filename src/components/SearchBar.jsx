import { useState } from "react";
import { useNavigate } from "react-router-dom";

// styles
import "./SearchBar.css";

function SearchBar() {
	const [term, setTerm] = useState("");
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		// redirect => search page
		// ?q={term}
		navigate(`/search?q=${term}`);
	}

	return (
		<div className="searchbar" onSubmit={handleSubmit}>
			<form>
				<label htmlFor="search">Search:</label>
				<input
					type="text"
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					required
				/>
			</form>
		</div>
	);
}

export default SearchBar;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Create, Recipe, Search } from "./pages";

// styles
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/search" element={<Search />} />
					<Route path="/recipe/:id" element={<Recipe />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

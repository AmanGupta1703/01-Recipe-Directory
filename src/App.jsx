import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import { Navbar } from "./components";

// pages
import { Home, Create, Recipe, Search } from "./pages";

// styles
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route index path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/search" element={<Search />} />
					<Route path="/recipes/:id" element={<Recipe />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

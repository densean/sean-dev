import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/home/Home";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
		</Routes>
	);
}

export default App;

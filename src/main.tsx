import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/configureStore.ts";
import { Navbar } from "./components/common/Navbar.tsx";
// import { Footer } from "./components/common/Footer.tsx";

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<StrictMode>
			<BrowserRouter>
				<Navbar />
				<App />
				{/* <Footer /> */}
			</BrowserRouter>
		</StrictMode>
	</Provider>
);

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Routes";

import Details from "./Components/Details/Details";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route path="search/:word" element={<Details />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;

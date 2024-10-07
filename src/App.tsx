import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";
import ForgotPassword from "@/pages/ForgotPassword";
import { Provider } from "react-redux";
import store from "@/app/store";
import Home from "@/pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "@/features/layout/MainLayout"; // Import the Layout component
import Projects from "./pages/Projects";
import Estimates from "./pages/Estimates";

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Routes>
					{/* Public Routes */}
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/forgot-password' element={<ForgotPassword />} />
					<Route path='/signup' element={<Signup />} />

					{/* Protected Routes */}
					<Route element={<ProtectedRoute />}>
						<Route element={<Layout />}> 
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/estimates' element={<Estimates />} />
						</Route>
					</Route>
				</Routes>
			</Router>
		</Provider>
	);
}

export default App;

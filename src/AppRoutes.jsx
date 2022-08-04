import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { useContext } from 'react';
import React from 'react';
import HomePage from './pages/HomePage/index.jsx';
import LoginPage from './pages/LoginPage/index.jsx';
import { AuthProvider, AuthContext } from './contexts/Auth.jsx';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer';

export default function AppRoutes() {
	const Private = ({ children }) => {
		const { authenticade, loading } = useContext(AuthContext);

		if (loading) {
			return (
				<div className="loading">Cargando...</div>
			)
		}

		if (!authenticade) {
			return <Navigate to='/login' />;
		} else {
			return children;
		}
	};
	return (
		<Router>
			<AuthProvider>
				<NavBar />
				<Routes>
					<Route path='/login' element={<LoginPage />} />
					<Route
						path='/'
						element={
							<Private>
								<HomePage />
							</Private>
						}
					/>
				</Routes>
				<Footer />
			</AuthProvider>
		</Router>
	);
}

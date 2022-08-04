import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const recoveredUser = localStorage.getItem('user');

		if (recoveredUser) {
			setUser(JSON.parse(recoveredUser));
		}

		setLoading(false);
	}, []);

	const login = (email, password) => {
		const loggedUser = {
			id: '123',
			email,
			name: 'Gustavo Lago',
		};

		localStorage.setItem('user', JSON.stringify(loggedUser));

		if (password === 'gustavo') {
			setUser(loggedUser);
			navigate('/');
		} else {
			Swal.fire({
				title: 'Error!',
				text: 'Contraseña incorrecta',
				icon: 'warning',
				iconColor: '#fc9d39',
				confirmButtonColor: '#fc9d39',
				confirmButtonText: 'Intentar nuevamente',
			});
		}
	};

	const logout = () => {
		setUser(null);
		navigate('/login');
		localStorage.removeItem('user');
	};

	return (
		<AuthContext.Provider
			value={{
				authenticade: !!user,
				user,
				login,
				logout,
				loading,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

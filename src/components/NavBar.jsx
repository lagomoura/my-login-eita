import React, { useContext } from 'react';
import '../style-sheets/NavBar.css';

import { AuthContext } from '../contexts/Auth';

export default function NavBar() {
	const { authenticade, user } = useContext(AuthContext);

	return (
		<nav className='navbar navbar-expand-lg navbar-light p-0 mx-0' id='menu'>
			<div className='container-fluid p-1 m-0 d-flex mx-lg-0'>
				<a className='navbar-brand mx-1 my-0' href='/'>
					<span className='fs-1 titulo-logo md-4'>Eita!</span>
					<span className='fw-light subtitulo-logo'>
						Club Exclusivo de Cerveza
					</span>
				</a>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
			</div>
			<div className='container-fluid mx-0 d-flex flex-row-reverse'>
				<div
					className='col-lg-6 collapse navbar-collapse navbar-menu p-3 m-0'
					id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0 d-flex ml-auto'>
						<li className='nav-item align-bottom align-self-start'>
							<a className='nav-link active' aria-current='page' href='/'>
								Inicio
							</a>
						</li>
						<li className='nav-item dropdown'>
							<a
								className='nav-link dropdown-toggle'
								href='/'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Tienda
							</a>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<a className='dropdown-item' href='/'>
										Ales
									</a>
								</li>
								<li>
									<hr className='dropdown-divider' />
								</li>
								<li>
									<a className='dropdown-item' href='/'>
										Lagers
									</a>
								</li>
								<div>
									<li>
										<hr className='dropdown-divider' />
									</li>
									<li>
										<a href='/'>
											<span className='dropdown-item fw-bold text-uppercase'>
												Todos los estilos 🍻
											</span>
										</a>
									</li>
								</div>
							</ul>
						</li>
						<li className='nav-item'>
							<a className='nav-link' href='/'>
								Contacto
							</a>
						</li>
						{authenticade === true ? (
							<li className='nav-item'>
								<span className='nav-link fw-bold' href='/login'>
									{`Bienvenido: ${user.email}`}
								</span>
							</li>
						) : (
							<li className='nav-item'>
								<a className='nav-link' href='/login'>
									Mi cuenta
								</a>
							</li>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
}

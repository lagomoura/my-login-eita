import React from 'react';
import '../style-sheets/Footer.css';
import Logo from '../../src/style-sheets/imgs/logo-fondo4.svg';
import Toastify from 'toastify-js';
import { useState } from 'react';

function Footer() {
	const [email, setEmail] = useState('');

	function handleEmail(email) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return true;
		} else {
			return false;
		}
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (!handleEmail(email)) {
			alert("Por favor, agregar un email valido")
		} else {
			alert('Gracias por suscribirte');
			setEmail('');
		}
	}

	return (
		<footer id='footer' className='footer-fondo'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-sm-auto col-md-6 col-lg-4 logo d-flex align-items-start justify-content-center my-auto'>
						<img src={Logo} alt='logo' />
					</div>
					<div className='col-sm-auto col-md-6 col-lg-4 d-flex menu-footer justify-content-center align-items-center mx-0 px-1 my-auto'>
						<ul>
							<li>
								<a href='/'>INICIO</a>
							</li>
							<li>
								<a href='/'>EL CLUB</a>
							</li>
							<li>
								<a href='/'>UNITE</a>
							</li>
							<li>
								<a href='/'>CALENDARIO DE ESTILOS</a>
							</li>
							<li>
								<a href='/'>CONTACTO</a>
							</li>
							<li>
								<a href='./'>TIENDA</a>
							</li>
							<li>
								<a href='/'>MI CUENTA</a>
							</li>
						</ul>
					</div>
					<div className='col-sm-auto col-md-6 col-lg-4 redes-logo d-flex justify-content-around'>
						<div className='newsletter d-flex justify-content-start align-items mx-auto p-3'>
							<form className='row g-0 justify-content-center text-center my-auto mx-auto d-flex flex-column'>
								<div className='col-auto d-flex p-1'>
									<label
										htmlFor='staticEmail2'
										className='text-capitalize text-dark fw-bold fs-5'>
										Suscribate nuestra newsletter
									</label>
								</div>
								<div className='col-auto'>
									<input
										type='email'
										onChange={(e) => setEmail(e.target.value)}
										className='form-control text-dark'
										placeholder=' *Su E-mail'
									/>
								</div>
								<div className='col-auto p-2'>
									{
										<button
											onClick={handleSubmit}
											type='submit'
											className='btn bg-dark mb-3 text-uppercase btn-newsletter text-warning'>
											confirmar
										</button>
									}
								</div>
							</form>
						</div>
					</div>
					<div className='d-flex col-sm-auto col-md-6 col-lg-4 justify-content-between my-auto mx-auto m-0 redes-logo my-auto py-auto'>
						<a href='instagra.com' className='p-1'>
							<i className='fab fa-instagram redes-logo' />
						</a>
						<a href='youtube.co' className='p-1'>
							<i className='fab fa-youtube redes-logo' />
						</a>
						<a href='reddit.com' className='p-1'>
							<i className='fab fa-reddit redes-logo' />
						</a>
						<a href='twitter.co' className='p-1'>
							<i className='fab fa-twitter redes-logo' />
						</a>
						<a href='tiktok.com' className='p-1'>
							<i className='fab fa-tiktok redes-logo' />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

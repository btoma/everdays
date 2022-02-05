import React, { useEffect, useState } from "react";
import logoDesktop from '../images/logo-desktop.png';
import logoMobile from '../images/logo-mobile.png';

const Header = () => {

	const [headerClass, setHeaderCalss] = useState('')

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				setHeaderCalss('sticky ');
			}else {
				setHeaderCalss('');
			}
		});
	});

	return (
		<header className={`App-header ${headerClass}`}>
			<img src={logoDesktop} className="logo-desktop" alt="EverDays" />
			<img src={logoMobile} className="logo-mobile" alt="EverDays" />
			<a
				className="App-link sort-demo"
				href="#"
				target="_blank"
				rel="noopener noreferrer"
			>
				SORT DEMO
			</a>
		</header>
	);
}

export default Header;
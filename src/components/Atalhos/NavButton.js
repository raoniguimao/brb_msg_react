import React from 'react'
import { useNavigate } from 'react-router-dom'
// import classNames from 'classnames';
// import styles from './Atalhos.module.css';

const NavButton = ({ to, key, children }) => {
	let navigate = useNavigate();

	return (
		<button
			onClick={() => {
				document.getElementById('dBreadcrumb').innerHTML = to;
				navigate(to);
			}}
		// className={({ isActive }) => classNames(styles.link, { [styles.selected]: isActive })}
		>
			{children}
		</button>
	)
}

export default NavButton
import React, { useState } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import { motion } from 'framer-motion';
import { BsList, BsFillBootstrapFill } from 'react-icons/bs';
import style from './menu.module.css';

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const menuElements = [
		{
			buttonIcon: <BsFillBootstrapFill />,
			buttonLabel: 'test',
			onClick: () => {
				console.log('test');
			},
		},
		{
			buttonIcon: <BsFillBootstrapFill />,
			buttonLabel: 'test1',
			onClick: () => {
				console.log('test1');
			},
		},
		{
			buttonIcon: <BsFillBootstrapFill />,
			buttonLabel: 'test2',
			onClick: () => {
				console.log('test2');
			},
		},
		{
			buttonIcon: <BsFillBootstrapFill />,
			buttonLabel: 'test3',
			onClick: () => {
				console.log('test3');
			},
		},
	];

	return (
		<motion.div className={style.menuContainer}>
			<motion.button
				type='button'
				className={style.menuButton}
				onClick={() => setIsOpen((isOpen) => !isOpen)}
				initial={{ translateZ: 0, rotateZ: 45 }}
				whileTap={{ translateZ: -60 }}
			>
				<BsList />
			</motion.button>
			<MenuBar isOpen={isOpen} menuElements={menuElements} />
		</motion.div>
	);
}

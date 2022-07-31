import React, { useState } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import { motion } from 'framer-motion';
import { BsList, BsFillBootstrapFill } from 'react-icons/bs';
import style from './menu.module.css';

export default function Menu({ menuIcon, menuElements, tiltAngle, menuSize }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<motion.div className={style.menuContainer}>
			<motion.button
				type='button'
				className={style.menuButton}
				onClick={() => setIsOpen((isOpen) => !isOpen)}
				initial={{ translateZ: 0, rotateZ: 45 }}
				whileTap={{ translateZ: -60 }}
			>
				{menuIcon}
			</motion.button>
			<MenuBar isOpen={isOpen} menuElements={menuElements} angle={tiltAngle} menuSize={menuSize} />
		</motion.div>
	);
}

const defaultElements = [
	{
		buttonIcon: <BsFillBootstrapFill />,
		buttonLabel: 'element1',
		onClick: () => {},
	},
	{
		buttonIcon: <BsFillBootstrapFill />,
		buttonLabel: 'element2',
		onClick: () => {},
	},
	{
		buttonIcon: <BsFillBootstrapFill />,
		buttonLabel: 'element3',
		onClick: () => {},
	},
	{
		buttonIcon: <BsFillBootstrapFill />,
		buttonLabel: 'element4',
		onClick: () => {},
	},
];

Menu.defaultProps = {
	menuIcon: <BsList />,
	menuSize: null,
	tiltAngle: 5,
	menuElements: defaultElements,
};

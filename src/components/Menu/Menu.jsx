import React, { useState } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import { motion } from 'framer-motion';
import { BsList } from 'react-icons/bs';
import style from './menu.module.css';

export default function Menu() {
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
				<BsList />
			</motion.button>
			<MenuBar isOpen={isOpen} />
		</motion.div>
	);
}

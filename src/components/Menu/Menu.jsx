import React, { useState } from 'react';
import MenuLink from '../MenuLink/MenuLink';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { menuAnim } from './Menu.anim';
import style from './menu.module.css';

export default function Menu() {
	const [isOpen, setIsOpen] = useState(false);

	const x = useMotionValue(0);
	const rotateY = useTransform(x, [0, 500], [-5, 5]);

	function handleMouse(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		x.set(event.clientX - rect.left);
	}

	return (
		<motion.div className={style.menuContainer}>
			<motion.button
				type='button'
				className={style.menuButton}
				onClick={() => setIsOpen((isOpen) => !isOpen)}
				initial={{ translateZ: 0, rotateZ: 45 }}
				whileTap={{ translateZ: -60 }}
			>
				<svg xmlns='http://www.w3.org/2000/svg' className='bi bi-list' viewBox='0 0 16 17'>
					<path
						fillRule='evenodd'
						d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
					/>
				</svg>
			</motion.button>
			<motion.div
				className={style.menuWrapper}
				animate={isOpen ? 'open' : 'closed'}
				variants={menuAnim}
				onMouseMove={handleMouse}
				style={{ rotateY: rotateY }}
			>
				<ul className={`${style.menuList} ${style.long}`}>
					<li>
						<MenuLink />
					</li>
					<li>
						<MenuLink />
					</li>
					<li>
						<MenuLink />
					</li>
					<li>
						<MenuLink />
					</li>
				</ul>
			</motion.div>
		</motion.div>
	);
}

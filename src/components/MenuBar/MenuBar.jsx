import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { menuAnim } from './Menu.anim';
import style from './MenuBar.module.css';

export default function MenuBar({ isOpen = 'closed', angle = 5 }) {
	const x = useMotionValue(0);
	const rotateY = useTransform(x, [0, 500], [-angle, angle]);
	function handleMouse(event) {
		const rect = event.currentTarget.getBoundingClientRect();
		x.set(event.clientX - rect.left);
	}

	return (
		<motion.div
			className={style.menuWrapper}
			variants={menuAnim}
			initial='closed'
			animate={isOpen ? 'open' : 'closed'}
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
	);
}

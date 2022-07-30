import React from 'react';
import MenuLink from '../MenuLink/MenuLink';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { menuAnim } from './Menu.anim';
import style from './MenuBar.module.css';

export default function MenuBar({ menuElements, isOpen, angle }) {
	const x = useMotionValue(0);
	const rotateY = useTransform(x, [0, 500], [-angle, angle]);

	const handleMouse = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		x.set(event.clientX - rect.left);
	};

	const menuClasses = { 2: style.menuSmall, 4: style.menuMedium, 6: style.menuLarge, 8: style.menuXlarge };

	return (
		<motion.div
			className={`${style.menuWrapper} ${menuClasses[menuElements.length]}`}
			variants={menuAnim}
			initial='closed'
			animate={isOpen ? 'open' : 'closed'}
			onMouseMove={handleMouse}
			style={{ rotateY: rotateY }}
		>
			<ul className={style.menuList}>
				{menuElements.map((el) => {
					return (
						<li key={el.buttonLabel}>
							<MenuLink buttonIcon={el.buttonIcon} buttonLabel={el.buttonLabel} onClick={el.onClick} />
						</li>
					);
				})}
			</ul>
		</motion.div>
	);
}

const defaultElements = [
	{
		buttonLabel: 'element1',
		onClick: () => {
			console.log('element1');
		},
	},
	{
		buttonLabel: 'element2',
		onClick: () => {
			console.log('element2');
		},
	},
	{
		buttonLabel: 'element3',
		onClick: () => {
			console.log('element3');
		},
	},
	{
		buttonLabel: 'element4',
		onClick: () => {
			console.log('element4');
		},
	},
];

MenuBar.defaultProps = {
	isOpen: 'closed',
	angle: 5,
	menuElements: defaultElements,
};

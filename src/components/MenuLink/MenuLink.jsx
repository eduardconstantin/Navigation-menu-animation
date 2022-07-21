import React from 'react';
import { motion } from 'framer-motion';
import { IconAnim, LabelAnim } from './MenuLink.anim';
import style from './MenuLink.module.css';

export default function MenuLink({ icon, buttonLabel = 'Default', onClick }) {
	return (
		<motion.button
			initial='initial'
			animate='initial'
			whileHover='hover'
			type='button'
			className={style.listButton}
			onClick={onClick}
		>
			<motion.div variants={IconAnim}>{icon}</motion.div>
			<motion.p variants={LabelAnim}>{buttonLabel.toUpperCase()}</motion.p>
		</motion.button>
	);
}

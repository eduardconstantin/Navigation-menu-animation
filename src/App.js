import Menu from './components/Menu/Menu';
import { BsHouse, BsNewspaper, BsShopWindow, BsPencilSquare } from 'react-icons/bs';

export default function App() {
	const menuElements = [
		{
			buttonIcon: <BsHouse />,
			buttonLabel: 'home',
			onClick: () => {},
		},
		{
			buttonIcon: <BsNewspaper />,
			buttonLabel: 'news',
			onClick: () => {},
		},
		{
			buttonIcon: <BsShopWindow />,
			buttonLabel: 'shop',
			onClick: () => {},
		},
		{
			buttonIcon: <BsPencilSquare />,
			buttonLabel: 'contact',
			onClick: () => {},
		},
	];

	return (
		<div className='App'>
			<Menu menuElements={menuElements} />
		</div>
	);
}

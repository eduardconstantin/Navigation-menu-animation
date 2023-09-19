# Navigation menu animation concept

## THIS REPO HAS BEEN ARCHIVED AND THE CONTENT HAS BEEN MOVED TO [THIS ONE](https://github.com/eduardconstantin/react-motion-components)

This was a good experiment to learn a few new tools that I wanted to use for a long time.

What I learned making this project:
- fundamentals of react.js: components, imports, props, states, installing modules, framer motion
- css modules

---

<img src="https://github.com/eduardconstantin/Navigation-menu-animation/blob/main/gif/menu.gif">

## Usage
``` javascript
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
```

## Props
I recommend using react icons for menu and button icons.
* menuIcon - JSX element for custom menu icon
* menuElements - Array of objects containing the following:
  * buttonIcon - JSX element for button icon
  * buttonLabel - string for button name
  * onClick - Event function for redirecting to another page
* tiltAngle - Number for maximum tilt angle for menu bar
* menuSize - Number for menu bar size, use only even numbers like 2, 4, 6, 8

## Menu sizes
<table>
	<tbody>
		<tr>
			<td colspan="2" align="center">SMALL - 2/4 items</td>
		</tr>
		<tr>
			<td><img src="https://github.com/eduardconstantin/Navigation-menu-animation/blob/main/gif/small1.png"></td>
			<td><img src="https://github.com/eduardconstantin/Navigation-menu-animation/blob/main/gif/small2.png"></td>
		</tr>
	</tbody>
</table>

<table>
	<tbody>
		<tr>
			<td colspan="2" align="center">MEDIUM - 4/6 items</td>
		</tr>
		<tr>
			<td><img src="https://github.com/eduardconstantin/Navigation-menu-animation/blob/main/gif/medium1.png"></td>
			<td><img src="https://github.com/eduardconstantin/Navigation-menu-animation/blob/main/gif/medium2.png"></td>
		</tr>
	</tbody>
</table>

<table>
	<tbody>
		<tr>
			<td colspan="2" align="center">LARGE - 6/8 items</td>
		</tr>
		<tr>
			<td><img src="https://github.com/eduardconstantin/Navigation-menu-animation/blob/main/gif/large1.png"></td>
			<td><img src="https://github.com/eduardconstantin/Navigation-menu-animation/blob/main/gif/large2.png"></td>
		</tr>
	</tbody>
</table>

<table>
	<tbody>
		<tr>
			<td colspan="2" align="center">EXTRA LARGE - 8/10 items</td>
		</tr>
		<tr>
			<td><img src="https://github.com/eduardconstantin/Navigation-menu-animation/blob/main/gif/xlarge1.png"></td>
			<td><img src="https://github.com/eduardconstantin/Navigation-menu-animation/blob/main/gif/xlarge2.png"></td>
		</tr>
	</tbody>
</table>

## Contributing
If you think you can make an improvement don't hesitate to open a pull request.

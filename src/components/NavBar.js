import './NavBar.scss';
import CartWidget from './CartWidget';

function NavBar() {
	return (
		<div className="NavBar">
			<h1>NavBar</h1>
			<CartWidget></CartWidget>
		</div>
	);
}

export default NavBar;

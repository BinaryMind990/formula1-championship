import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

import { navItems } from './NavItems';

const Navigation = () => {
	return (
		<div className='navigation-container'>
			<div className='navigation-wrapper'>
				<div className='logo'>
					<Link to='/'>
						<img src='./assets/F1-logo.png' alt='F1 logo' />
					</Link>
				</div>
				<div className='navigation-content'>
					{navItems.map(({ name, path, icon, alt }) => (
						<NavLink key={name} to={path} className={`navigation-link`}>
							<img
								className='navigation-link-icon'
								src={icon}
								alt={alt}
							/>
							<span className='navigation-link-text'>{name}</span>
						</NavLink>
					))}
				</div>
				<div className='credits'>
					<p>&copy; Stefan Jevtovic 2023</p>
				</div>
			</div>
		</div>
	);
};
export default Navigation;

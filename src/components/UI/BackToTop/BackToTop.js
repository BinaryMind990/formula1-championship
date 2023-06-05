import { useEffect, useState } from 'react';
import { handleBackToTop } from '../../Helper';
import './BackToTop.css';
import { RiArrowUpSLine } from 'react-icons/ri';

const BackToTop = () => {
	const [displayBackToTop, setDisplayBackToTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setDisplayBackToTop(true);
			} else {
				setDisplayBackToTop(false);
			}
		};
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			{displayBackToTop && (
				<div onClick={handleBackToTop} className='back-to-top'>
					<RiArrowUpSLine size={255} />
				</div>
			)}
		</div>
	);
};
export default BackToTop;

import React, { useContext } from 'react';
import { YearContext } from '../../contexts/YearContext';
import { Carousel } from 'antd';

const Home = () => {
	const { years, selectedYear, setSelectedYear } = useContext(YearContext);

	const handleYearChange = (e) => {
		const year = e.target.value;
		setSelectedYear(year);
	};
	return (
		<div className='home-page'>
			<div className='year-selector'>
				<div className='year-selector-container'>
					<label htmlFor='year'>Select year:</label>
					<select
						className='select'
						id='year'
						value={selectedYear}
						onChange={handleYearChange}
					>
						{years.map((year) => (
							<option
								className='year-selector-option'
								key={year.season}
								value={year.season}
							>
								{year.season}
							</option>
						))}
					</select>
				</div>
			</div>
			<div className='carousel-container'>
				<div className='carousel-overlay'></div>
				<Carousel autoplay effect='fade'>
					<div className='carousel carousel-item1'></div>
					<div className='carousel carousel-item2'></div>
					<div className='carousel carousel-item3'></div>
				</Carousel>
			</div>
		</div>
	);
};
export default Home;

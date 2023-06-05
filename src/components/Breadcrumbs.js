import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { HomeFilled } from '@ant-design/icons';

const Breadcrumbs = ({ items }) => {
	return (
		<div className='breadcrumb-container'>
			<Breadcrumb className='breadcrumb-navigation-link'>
				<Breadcrumb.Item>
					<Link to='/' className={`breadcrumb-link active`}>
						<HomeFilled />
						Home
					</Link>
				</Breadcrumb.Item>
				{items.map((item) => (
					<Breadcrumb.Item key={item.title}>
						<Link
							to={item.href}
							className={`breadcrumb-link ${
								item.href !== '' ? 'active' : 'current'
							}`}
						>
							{item.title}
						</Link>
					</Breadcrumb.Item>
				))}
			</Breadcrumb>
		</div>
	);
};

export default Breadcrumbs;

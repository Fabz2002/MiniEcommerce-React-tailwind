import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

function OptionSupplies() {
	const { categories } = useContext(ProductsContext);
	return (
		<nav className='text-white grid grid-cols-4 items-center border-b mb-6 gap-4'>
			{categories.map((cate, index) => {
				return (
					<a href='#' key={index} className='uppercase text-xs lg:text-lg'>
						{cate}
					</a>
				);
			})}
		</nav>
	);
}

export default OptionSupplies;

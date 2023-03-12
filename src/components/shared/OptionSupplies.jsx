import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

function OptionSupplies() {
	const { categories } = useContext(ProductsContext);
	return (
		<nav className='text-white grid grid-cols-5 items-center border-b mb-6 '>
			{categories.map((cate, index) => {
				return (
					<a href='#' key={index}>
						{cate}
					</a>
				);
			})}
		</nav>
	);
}

export default OptionSupplies;

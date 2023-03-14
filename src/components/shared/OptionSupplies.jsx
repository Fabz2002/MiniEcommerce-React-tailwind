import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

function OptionSupplies() {
	const {
		categories,
		setShowFilterProducts,
		setCategoryFiltered,
		setSearching,
	} = useContext(ProductsContext);
	function handleFilter(index) {
		setCategoryFiltered(categories[index]);
		setShowFilterProducts(true);
		setSearching(false);
	}
	return (
		<nav className='  text-white grid grid-cols-4 items-center justify-items-center  border-b mb-6 gap-4'>
			{categories.map((cate, index) => {
				return (
					<a
						href='#'
						key={index}
						className=' uppercase text-center text-sm md:text-base lg:text-base xl:w-auto xl:text-lg px-2 focus:text-[#FFC93C] '
						onClick={() => handleFilter(index)}
					>
						{cate}
					</a>
				);
			})}
		</nav>
	);
}

export default OptionSupplies;

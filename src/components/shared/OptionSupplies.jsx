import { useContext, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';

function OptionSupplies() {
	const {
		categories,
		setShowFilterProducts,
		setCategoryFiltered,
		setSearching,
	} = useContext(ProductsContext);
	function handleFilter(id) {
		setCategoryFiltered(categories[id].name);
		setShowFilterProducts(true);
		setSearching(false);
	}
	return (
		<nav className='  text-white grid grid-cols-4 items-center justify-items-center  border-b mb-6 gap-4'>
			{categories.map(cate => {
				return (
					<a
						href='#'
						key={cate.id}
						className=' uppercase text-center text-sm md:text-base lg:text-base xl:w-auto xl:text-lg px-2 focus:text-[#FFC93C] '
						onClick={() => handleFilter(cate.id)}
					>
						{cate.name}
					</a>
				);
			})}
		</nav>
	);
}

export default OptionSupplies;

function OptionSupplies() {
	return (
		<nav className='text-white grid grid-cols-5 items-center border-b mb-6 '>
			<a
				href='#'
				className='relative py-2  pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#FFC93C] before:left-0 before:rounded-full before:-bottom-[1px] text-[#FFC93C] lg:before:w-6 lg:before:h-[3px] sm:before:w-1/5 md:before:w-1/5 '
			>
				Pizza
			</a>
			<a href='#' className=''>
				Pasta
			</a>
			<a href='#' className=''>
				Vegan
			</a>
			<a href='#' className=''>
				Niños
			</a>
			<a href='#' className=''>
				Bebidas
			</a>
		</nav>
	);
}

export default OptionSupplies;

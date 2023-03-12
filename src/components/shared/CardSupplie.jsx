function CardSupplie({ image, title, available = '', price }) {
	return (
		<div className='bg-[#20262E] p-8 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300 '>
			<img
				src={image}
				className='w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full'
			/>
			<p className='text-xl'>{title}</p>
			<span className='text-gray-400'>S/{price}</span>
			<p className='text-gray-600'>
				{available === ''
					? 'Not Available'
					: available === 1
					? `${available} Available`
					: `${available} Availables`}
			</p>
			<button
				type='button'
				className=' bg-[#FFC93C] bottom-0   rounded-lg  py-2 px-4 mt-2 text-gray-700'
			>
				Add to Cart
			</button>
		</div>
	);
}

export default CardSupplie;

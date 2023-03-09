import { RiDeleteBin5Line } from 'react-icons/ri';

function CardProductOrdersItem({
	image,
	titleProduct,
	itemPrice,
	cant,
	precioItems,
}) {
	return (
		<div className='bg-[#959ea7] text-white p-4 rounded-xl mb-6'>
			<div className='grid grid-cols-6 mb-4'>
				{/* description product */}
				<div className='col-span-4 flex items-center gap-3'>
					<img src={image} className='w-10 h-10 object-cover' />
					<div>
						<h5 className='text-sm'>{titleProduct}</h5>
						<p className='text-xs text-gray-500'>S/{itemPrice}</p>
					</div>
				</div>
				{/* qty */}
				<div className='text-center '>
					<span className=' bg-[#20262E] px-3 py-2 rounded-md text-sm'>
						{cant}
					</span>
				</div>
				{/* Precio */}
				<div className=''>
					<span className='text-sm'>S/{precioItems}</span>
				</div>
			</div>
			{/* note */}
			<div className='grid grid-cols-6 items-center '>
				<form className='col-span-5'>
					<input
						type='text'
						className='bg-[#20262E] py-1 px-4 rounded-lg outline-none'
						placeholder='Nota de la Orden...'
					/>
				</form>
				<div>
					<button className='border border-[#FFC93C] p-2 rounded-lg'>
						<RiDeleteBin5Line className='text-[#FFC93C]' />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CardProductOrdersItem;

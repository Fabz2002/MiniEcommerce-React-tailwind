import { RiDeleteBin5Line } from 'react-icons/ri';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
function CardProductOrdersItem({
	image,
	titleProduct,
	itemPrice,
	precioItems,
	product,
}) {
	const { DeleteProduct } = useContext(ProductsContext);

	return (
		<div className='bg-[#959ea7] text-white p-4 rounded-xl mb-6'>
			<div className='grid grid-cols-6  mb-4'>
				{/* description product */}
				<div className='col-span-4 flex items-center gap-3'>
					<img src={image} className='w-10 h-10 object-cover' />
					<div>
						<h5 className='text-sm'>{titleProduct}</h5>
						<p className='text-xs text-gray-500'>S/{itemPrice}</p>
					</div>
				</div>
				{/* qty */}

				{/* Precio */}
				<div className=''>
					<span className='text-sm'>S/{precioItems}</span>
				</div>
			</div>
			{/* note */}
			{/* md:grid md:grid-cols-6 md:gap-5  'md:col-span-5' */}
			<div className=' grid grid-cols-6  gap-2  items-center '>
				<form className='col-span-5'>
					<input
						type='text'
						className='bg-[#20262E] py-1 px-4 rounded-lg outline-none w-full'
						placeholder='Nota de la Orden...'
					/>
				</form>
				<div>
					<button
						className='border border-[#FFC93C] p-2 rounded-lg'
						onClick={() => DeleteProduct(product)}
					>
						<RiDeleteBin5Line className='text-[#FFC93C]' />
					</button>
				</div>
			</div>
		</div>
	);
}

export default CardProductOrdersItem;

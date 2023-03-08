import ButtonOrder from './ButtonOrder';
import { RiCloseLine } from 'react-icons/ri';
import CategoriesShoppingCart from './CategoriesShoppingCart';
function Orders({ orderNumber = 1 }) {
	return (
		<section className=' lg:col-span-2 fixed lg:static right-0 top-0 bg-[#20262E] w-full h-full lg:rounded-r-2xl '>
			<div className='relative pt-16 text-gray-300 p-8'>
				<RiCloseLine className='absolute left-4 top-4 p-3 box-content text-white bg-[#959ea7] rounded-full text-xl' />
				<h1 className='text-2xl my-4'>Orders #{orderNumber}</h1>
				<div className='flex items-center gap-4 flex-wrap mb-8'>
					<button className='bg-[#FFC93C] text-white py-2 px-4 rounded-xl'>
						Dine In
					</button>
					<button className='text-[#FFC93C] py-2 px-4 rounded-xl border border-gray-500'>
						Dine In
					</button>
					<button className='text-[#FFC93C] py-2 px-4 rounded-xl border border-gray-500'>
						Dine In
					</button>
				</div>
				{/* car */}
				<div>
					<CategoriesShoppingCart />
					{/* product */}
					<div className='bg-[#959ea7] text-white p-4 rounded-xl'>
						<div className='grid grid-cols-6 '>
							{/* description product */}
							<div className='col-span-4 flex items-center gap-3'>
								<img
									src='../img/pizzaAmerica.png'
									className='w-10 h-10 object-cover'
								/>
								<div>
									<h5 className='text-sm'>Pizza America..</h5>
									<p className='text-xs text-gray-500'>S/10.99</p>
								</div>
							</div>
							{/* qty */}
							<div className='text-center'>
								<span>2</span>
							</div>
							{/* Precio */}
							<div className=''>
								<span>S/21.98</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Orders;

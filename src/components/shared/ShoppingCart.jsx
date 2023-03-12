import { RiCloseLine, RiShoppingBagLine } from 'react-icons/ri';
import CategoriesShoppingCart from './CategoriesShoppingCart';
import SubmitPayment from './SubmitPayment';
import CardProductOrdersItem from './CardProductOrdersItem';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
function Orders() {
	const { showOrder, setShowOrder, allProductsCart } =
		useContext(ProductsContext);
	return (
		<section
			className={`fixed  top-0 bg-[#20262E] w-full lg:w-96 lg:right-0 h-full lg:rounded-r-2xl ${
				showOrder ? 'right-0' : '-right-full'
			} z-50`}
		>
			<div className='relative pt-14 text-gray-300 p-8 h-full'>
				<RiCloseLine
					className='lg:hidden absolute left-4 top-4 p-3 box-content text-white bg-[#959ea7] rounded-full text-xl '
					onClick={() => {
						setShowOrder(false);
					}}
				/>
				<h1 className=' text-2xl my-4 flex items-center gap-4'>
					Orders
					<div className='relative'>
						<RiShoppingBagLine className='text-3xl' />
						<span className='bg-[#FFC93C] absolute rounded-full px-2 py-[2px] text-sm text-slate-600 -right-2 -mt-4'>
							0
						</span>
					</div>
				</h1>
				{/* car */}

				{allProductsCart.length ? (
					<div>
						<CategoriesShoppingCart />
						<div className='h-[450px] md:h-[800px] lg:h-[640px]  overflow-y-scroll '>
							{allProductsCart.map(product => {
								return (
									<CardProductOrdersItem
										key={product.id}
										image={product.image}
										titleProduct={`${product.title.slice(0, 8)}...`}
										itemPrice={product.price}
										cant='0'
										precioItems={product.price * 1}
									/>
								);
							})}
						</div>
					</div>
				) : (
					<div className='flex items-center justify-center h-5/6 '>
						<p className='text-2xl'>The cart is empty</p>
					</div>
				)}

				<SubmitPayment />
			</div>
		</section>
	);
}

export default Orders;

import ButtonOrder from './ButtonOrder';
import { RiCloseLine } from 'react-icons/ri';
import CategoriesShoppingCart from './CategoriesShoppingCart';
import SubmitPayment from './SubmitPayment';
import CardProductOrdersItem from './CardProductOrdersItem';
import { useContext } from 'react';
import { ProductsContext } from '../../context/productsContext';
function Orders({ orderNumber = 1 }) {
	const { showOrder, setShowOrder } = useContext(ProductsContext);
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
						console.log('showOrder');
					}}
				/>
				<h1 className='text-2xl my-4'>Orders #{orderNumber}</h1>
				{/* car */}
				<div>
					<CategoriesShoppingCart />
					<div className='h-[450px] md:h-[800px] lg:h-[640px]  overflow-y-scroll '>
						<CardProductOrdersItem
							image='../img/pizzaAmerica.png'
							titleProduct='Pizza Americ...'
							itemPrice='10.99'
							cant='2'
							precioItems='21.98'
						/>
						<CardProductOrdersItem
							image='../img/pizzaChampi.png'
							titleProduct='Pizza Champi...'
							itemPrice='10.99'
							cant='3'
							precioItems='21.98'
						/>
						<CardProductOrdersItem
							image='../img/pizzaHawaina.png'
							titleProduct='Pizza Hawai...'
							itemPrice='10.99'
							cant='1'
							precioItems='21.98'
						/>
						<CardProductOrdersItem
							image='../img/pizzaHawaina.png'
							titleProduct='Pizza Hawai...'
							itemPrice='10.99'
							cant='1'
							precioItems='21.98'
						/>
						<CardProductOrdersItem
							image='../img/pizzaHawaina.png'
							titleProduct='Pizza Hawai...'
							itemPrice='10.99'
							cant='1'
							precioItems='21.98'
						/>
						<CardProductOrdersItem
							image='../img/pizzaHawaina.png'
							titleProduct='Pizza Hawai...'
							itemPrice='10.99'
							cant='1'
							precioItems='21.98'
						/>
						<CardProductOrdersItem
							image='../img/pizzaHawaina.png'
							titleProduct='Pizza Hawai...'
							itemPrice='10.99'
							cant='1'
							precioItems='21.98'
						/>
						<CardProductOrdersItem
							image='../img/pizzaHawaina.png'
							titleProduct='Pizza Hawai...'
							itemPrice='10.99'
							cant='1'
							precioItems='21.98'
						/>
					</div>
				</div>
				<SubmitPayment />
			</div>
		</section>
	);
}

export default Orders;

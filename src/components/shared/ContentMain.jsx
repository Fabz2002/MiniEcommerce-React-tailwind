import CardPizza from './CardPizza';
import CardBebidas from './CardBebidas';
import { supplies } from '../../services/datos';
function ContentMain() {
	return (
		<div className='p-8 grid grid-cols-1 gap-16 sm:grid-cols-2  xl:grid-cols-3'>
			{supplies.Pizza.map(pizza => {
				return (
					<CardPizza
						key={pizza.id}
						image={pizza.image}
						title={pizza.title}
						available={pizza.quantity}
						price={pizza.price}
					/>
				);
			})}
			{supplies.Bebidas.map(bebida => {
				return (
					<CardBebidas
						key={bebida.id}
						image={bebida.image}
						title={bebida.title}
						available={bebida.quantity}
						price={bebida.price}
					/>
				);
			})}

			<div className='bg-[#20262E] p-8 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300'>
				<img
					src='img/cocacola.png'
					className='w-40 h-40 object-cover -mt-24  '
				/>
				<p className='text-xl'>Lorem ipsum dolor sit</p>
				<span className='text-gray-400'>S/26.50</span>
				<p className='text-gray-600'>10 disponibles</p>
			</div>
		</div>
	);
}

export default ContentMain;

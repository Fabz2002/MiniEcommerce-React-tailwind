import CardSupplie from './CardSupplie';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
function ContentMain() {
	const { supplies } = useContext(ProductsContext);
	// id, price, title, image, count
	return (
		<div className='p-8 grid grid-cols-1 gap-16 sm:grid-cols-2  xl:grid-cols-3'>
			{supplies.map(supplie => {
				return (
					<CardSupplie
						key={supplie.id}
						image={supplie.image}
						title={supplie.title}
						available={supplie.count}
						price={supplie.price}
					/>
				);
			})}
			{/* {supplies.Bebidas.map(bebida => {
				return (
					<CardBebidas
						key={bebida.id}
						image={bebida.image}
						title={bebida.title}
						available={bebida.quantity}
						price={bebida.price}
					/>
				);
			})} */}
		</div>
	);
}

export default ContentMain;

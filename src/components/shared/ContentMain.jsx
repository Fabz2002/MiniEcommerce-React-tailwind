import CardSupplie from './CardSupplie';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
function ContentMain() {
	const { supplies } = useContext(ProductsContext);
	return (
		<div className='p-8 grid grid-cols-1 gap-16 sm:grid-cols-2  xl:grid-cols-3'>
			{supplies.length === 0 ? (
				<h1
					className='text-center
				 col-span-full text-2xl'
				>
					No existe lo que buscas
				</h1>
			) : (
				supplies.map(supplie => {
					return (
						<CardSupplie
							key={supplie.id}
							image={supplie.image}
							title={supplie.title}
							available={supplie.count}
							price={supplie.price}
							supplie={supplie}
						/>
					);
				})
			)}
		</div>
	);
}

export default ContentMain;

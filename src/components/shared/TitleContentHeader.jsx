import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
function TitleContentHeader({ title = 'Escoge' }) {
	const { setShowLowPrices } = useContext(ProductsContext);
	function handleOptionClick(e) {
		if (e.target.value === 'LowPrice') {
			setShowLowPrices(true);
		}
		if (e.target.value === 'HighPrice') {
			setShowLowPrices(false);
		}
	}
	return (
		<div className='flex items-center justify-between mb-8 '>
			<h2 className='text-xl text-gray-200 '>{title}</h2>
			<select
				onClick={e => handleOptionClick(e)}
				className='bg-[#20262E] items-center  text-gray-200 rounded-lg py-2 px-2 outline-none

                '
			>
				<option value='HighPrice'>Mayor Precio</option>
				<option value='LowPrice'>Menor Precio</option>
			</select>
		</div>
	);
}

export default TitleContentHeader;

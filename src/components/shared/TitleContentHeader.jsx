import { RiArrowDownSFill } from 'react-icons/ri';
function TitleContentHeader({ title = 'Escoge' }) {
	return (
		<div className='flex items-center justify-between mb-8'>
			<h2 className='text-xl text-gray-200 '>{title}</h2>
			<select
				className='bg-[#20262E] items-center  text-gray-200 rounded-lg py-2 px-2 outline-none

                '
			>
				<option value='rigatoni'>Mayor Precio</option>
				<option value='dave'>Menor Precio</option>
			</select>
		</div>
	);
}

export default TitleContentHeader;

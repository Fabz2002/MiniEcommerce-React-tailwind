import { RiArrowDownSFill } from 'react-icons/ri';
function TitleContentHeader({ title = 'Escoge' }) {
	return (
		<div className='flex items-center justify-between mb-8'>
			<h2 className='text-xl text-gray-200 '>{title}</h2>
			<button
				className='bg-[#20262E] flex items-center gap-4 text-gray-200 rounded-lg py-2 px-4 

                '
			>
				<RiArrowDownSFill /> Mayor Precio
			</button>
		</div>
	);
}

export default TitleContentHeader;

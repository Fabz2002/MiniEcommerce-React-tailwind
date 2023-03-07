function CardBebidas({ image, title, available, price }) {
	return (
		<div className='bg-[#20262E] p-8 rounded-xl flex flex-col gap-2 items-center text-center text-gray-300'>
			<img src={image} className='w-40 h-40 object-cover -mt-24 ' />
			<p className='text-xl'>{title}</p>
			<span className='text-gray-400'>S/{price}</span>
			<p className='text-gray-600'>
				{available > 0 ? `${available}disponible` : `${available}disponibles`}
			</p>
		</div>
	);
}

export default CardBebidas;

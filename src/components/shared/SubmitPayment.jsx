function SubmitPayment() {
	return (
		<div className='absolute bottom-0 left-0 bg-[#f2f2f2] w-full rounded-t-xl  p-4'>
			<div className='flex items-center justify-between mb-4'>
				<span className='text-gray-600'>Descuento</span>
				<span className='text-slate-400'>S/0</span>
			</div>
			<div className='flex items-center justify-between mb-6'>
				<span className='text-gray-600'>Subtotal</span>
				<span className='text-slate-400'>S/201.03</span>
			</div>
			<div className=''>
				<button className='bg-[#FFC93C]   rounded-lg w-full py-2  px-4  text-gray-700  hover:text-white'>
					Continuar con el Pago
				</button>
			</div>
		</div>
	);
}

export default SubmitPayment;

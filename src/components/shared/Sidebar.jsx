import {
	RiHome4Line,
	RiGiftLine,
	RiPieChartLine,
	RiMailLine,
	RiNotification3Line,
	RiSettings3Line,
	RiLogoutCircleRLine,
} from 'react-icons/ri';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
function SideBar() {
	const { showMenu } = useContext(ProductsContext);
	return (
		<div
			className={`bg-[#20262E] fixed  lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-5 rounded-tr-lg rounded-br-lg z-50 -left-full transition-all ${
				showMenu ? 'left-0' : '-left-full'
			}`}
		>
			<div>
				<ul className='pl-4'>
					<li>
						<h1 className='text-sm text-gray-300 uppercase font-bold text-center my-4'>
							Vital
							<span className='text-sm text-[#FFC93C] uppercase font-bold text-center mx-1'>
								Clofz
							</span>
						</h1>
					</li>
					<li className='bg-[#BDCDD6] p-4 rounded-tl-xl rounded-bl-xl'>
						<a
							href='#'
							className='bg-[#FFC93C] p-4 flex justify-center rounded-xl text-white'
						>
							<RiHome4Line className='text-2xl ' />
						</a>
					</li>
					<li className='hover:bg-[#BDCDD6] p-4 rounded-tl-xl group  rounded-bl-xl transition-colors'>
						<a
							href='#'
							className='group-hover:bg-[#FFC93C] p-4 flex justify-center rounded-xl text-[#FFC93C] group-hover:text-white transition-colors'
						>
							<RiGiftLine className='text-2xl ' />
						</a>
					</li>
					<li className='hover:bg-[#BDCDD6] p-4 rounded-tl-xl group  rounded-bl-xl transition-colors'>
						<a
							href='#'
							className='group-hover:bg-[#FFC93C] p-4 flex justify-center rounded-xl text-[#FFC93C] group-hover:text-white transition-colors'
						>
							<RiPieChartLine className='text-2xl ' />
						</a>
					</li>
					<li className='hover:bg-[#BDCDD6] p-4 rounded-tl-xl group  rounded-bl-xl transition-colors'>
						<a
							href='#'
							className='group-hover:bg-[#FFC93C] p-4 flex justify-center rounded-xl text-[#FFC93C] group-hover:text-white transition-colors'
						>
							<RiMailLine className='text-2xl ' />
						</a>
					</li>
					<li className='hover:bg-[#BDCDD6] p-4 rounded-tl-xl group  rounded-bl-xl transition-colors'>
						<a
							href='#'
							className='group-hover:bg-[#FFC93C] p-4 flex justify-center rounded-xl text-[#FFC93C] group-hover:text-white transition-colors'
						>
							<RiNotification3Line className='text-2xl ' />
						</a>
					</li>
					<li className='hover:bg-[#BDCDD6] p-4 rounded-tl-xl group  rounded-bl-xl transition-colors'>
						<a
							href='#'
							className='group-hover:bg-[#FFC93C] p-4 flex justify-center rounded-xl text-[#FFC93C] group-hover:text-white transition-colors'
						>
							<RiSettings3Line className='text-2xl ' />
						</a>
					</li>
				</ul>
			</div>
			<div>
				<ul className=' pl-4'>
					<li className='hover:bg-[#BDCDD6] p-4 rounded-tl-xl group  rounded-bl-xl transition-colors'>
						<a
							href='#'
							className='group-hover:bg-[#FFC93C] p-4 flex justify-center rounded-xl text-[#FFC93C] group-hover:text-white transition-colors'
						>
							<RiLogoutCircleRLine className='text-2xl ' />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SideBar;

import './App.css';
import { useState } from 'react';
import {
	RiMenuFill,
	RiUser3Line,
	RiAddFill,
	RiPieChartLine,
	RiCloseLine,
} from 'react-icons/ri';
import SideBar from './components/shared/Sidebar';
import Main from './components/shared/Main';
function App() {
	const [showMenu, setShowMenu] = useState(false);
	// const [showOrder, setShowOrder] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className='bg-[#959ea7] w-full  min-h-screen'>
			<SideBar showMenu={showMenu} />
			{/* Menu movil */}
			<nav
				className='bg-[#20262E] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl
      '
			>
				<button className='p-2'>
					<RiUser3Line />
				</button>
				<button className='p-2'>
					<RiAddFill />
				</button>
				<butto className='p-2'>
					<RiPieChartLine />
				</butto>
				<button onClick={toggleMenu} className='text-white p-2'>
					{showMenu ? <RiCloseLine /> : <RiMenuFill />}
				</button>
			</nav>
			<Main />
		</div>
	);
}

export default App;

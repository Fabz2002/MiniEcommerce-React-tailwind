import { RiSearchLine, RiTruckLine } from 'react-icons/ri';
import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
function Search() {
	const { setKword, setSearching } = useContext(ProductsContext);
	function HandleSearch(e) {
		setKword(e.target.value);
	}
	return (
		<div className='w-full md:w-auto relative '>
			<RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 cursor-pointer' />
			<input
				onClick={() => setSearching(true)}
				onChange={e => HandleSearch(e)}
				type='text'
				placeholder='Search'
				className='bg-[#20262E]  w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none'
			/>
		</div>
	);
}

export default Search;

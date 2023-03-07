import Search from './Search';
import TitleHeader from './TitleHeader';

function TitleAndSearch() {
	return (
		<header className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
			<TitleHeader />
			<Search />
		</header>
	);
}

export default TitleAndSearch;

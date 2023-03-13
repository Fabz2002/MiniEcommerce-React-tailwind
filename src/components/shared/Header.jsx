import OptionSupplies from './OptionSupplies';
import TitleAndSearch from './TitleAndSearch';
import TitleContentHeader from './TitleContentHeader';
function Header() {
	return (
		<>
			<TitleAndSearch />
			<OptionSupplies />
			<TitleContentHeader />
		</>
	);
}

export default Header;

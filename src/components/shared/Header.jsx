import OptionSupplies from './OptionSupplies';
import TitleAndSearch from './TitleAndSearch';
import TitleContentHeader from './TitleContentHeader';
const Optionsupplies = [
	{
		nombre: 'Pizza',
	},
	{
		nombre: 'Pasta',
	},
	{
		nombre: 'Vegan',
	},
	{
		nombre: 'Kids',
	},
	{
		nombre: 'Bebidas',
	},
];
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

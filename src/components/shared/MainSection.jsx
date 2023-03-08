import SectionPurchaseOptions from './SectionPurchaseOptions';
import ShoppingCart from './ShoppingCart';
function MainSection() {
	return (
		<main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 pl-4 pb-20'>
			<SectionPurchaseOptions />
			<ShoppingCart />
		</main>
	);
}

export default MainSection;

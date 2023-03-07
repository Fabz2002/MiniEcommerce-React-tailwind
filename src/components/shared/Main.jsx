import Header from './Header';
import ContentMain from './ContentMain';
function Main() {
	return (
		<main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20'>
			<section className='lg:col-span-6 md:p-8'>
				<Header />
				<ContentMain />
			</section>
			<section className=' lg:col-span-2 fixed lg:static right-0'>
				Carrito
			</section>
		</main>
	);
}

export default Main;

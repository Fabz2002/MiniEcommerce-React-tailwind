async function GetSuppliesFilter({ KindOfCategory }) {
	const api = 'https://api.escuelajs.co/api/v1/products';
	const res = await fetch(api);
	const response = await res.json();
	if (Array.isArray(response)) {
		const supplies = response.map(data => {
			const { id, price, title, images, category } = data;
			const image = images[0];
			const { name } = category;
			return { id, price, title, image, quantity: 0, name };
		});
		console.log(KindOfCategory, 'df');
		const category = supplies.filter(
			supplie => supplie.name === KindOfCategory
		);
		console.log(category);
		return category;
	}
}

export default GetSuppliesFilter;

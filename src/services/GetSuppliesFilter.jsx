async function GetSuppliesFilter({ KindOfCategory }) {
	const api = 'https://fakestoreapi.com/products';
	const res = await fetch(api);
	const response = await res.json();
	if (Array.isArray(response)) {
		const supplies = response.map(data => {
			const { id, price, title, image, rating, category } = data;
			const { count } = rating;
			return { id, price, title, image, count, quantity: 0, category };
		});
		const category = supplies.filter(
			supplie => supplie.category === KindOfCategory
		);
		return category;
	}
}

export default GetSuppliesFilter;

async function GetSuppliesSearched({ keyword }) {
	const api = 'https://fakestoreapi.com/products';
	const res = await fetch(api);
	const response = await res.json();
	if (Array.isArray(response)) {
		const supplies = response.map(data => {
			const { id, price, title, image, rating } = data;
			const { count } = rating;
			return { id, price, title, image, count, quantity: 0 };
		});
		const productsSearched = supplies.filter(data =>
			data.title.toLowerCase().includes(keyword.toLowerCase())
		);
		return productsSearched;
	}
}

export default GetSuppliesSearched;

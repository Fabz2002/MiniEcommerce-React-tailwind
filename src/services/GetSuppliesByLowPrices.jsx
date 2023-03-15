async function GetSuppliesByLowPrices() {
	const api = 'https://fakestoreapi.com/products';
	const res = await fetch(api);
	const response = await res.json();
	if (Array.isArray(response)) {
		const supplies = response.map(data => {
			const { id, price, title, image, rating } = data;
			const { count } = rating;
			return { id, price, title, image, count, quantity: 0 };
		});
		const productByLowPrices = supplies.sort((a, b) => a.price - b.price);
		return productByLowPrices;
	}
}

export default GetSuppliesByLowPrices;

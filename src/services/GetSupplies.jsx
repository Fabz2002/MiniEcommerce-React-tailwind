async function GetSupplies() {
	const api = 'https://fakestoreapi.com/products';
	const res = await fetch(api);
	const response = await res.json();
	if (Array.isArray(response)) {
		const supplies = response.map(data => {
			const { id, price, title, image, rating } = data;
			const { count } = rating;
			return { id, price, title, image, count };
		});
		return supplies;
	}
}

export default GetSupplies;

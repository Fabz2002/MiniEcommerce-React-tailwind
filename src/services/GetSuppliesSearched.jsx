async function GetSuppliesSearched({ keyword }) {
	const api = 'https://api.escuelajs.co/api/v1/products';
	const res = await fetch(api);
	const response = await res.json();
	if (Array.isArray(response)) {
		const supplies = response.map(data => {
			const { id, price, title, images } = data;
			const image = images[0];
			return { id, price, title, image, quantity: 0 };
		});
		const productsSearched = supplies.filter(data =>
			data.title.toLowerCase().includes(keyword.toLowerCase())
		);
		return productsSearched;
	}
}

export default GetSuppliesSearched;

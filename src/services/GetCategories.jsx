async function GetCategories() {
	const api = 'https://api.escuelajs.co/api/v1/categories';
	const res = await fetch(api);
	const response = await res.json();
	if (Array.isArray(response)) {
		const categories = response.map(category => {
			const { name, id } = category;
			return { name, id };
		});
		return categories.slice(0, 4);
	}
}

export default GetCategories;

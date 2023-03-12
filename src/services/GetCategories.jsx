async function GetCategories() {
	const api = 'https://fakestoreapi.com/products';
	const res = await fetch(api);
	const response = await res.json();
	if (Array.isArray(response)) {
		const uniqueCategories = response.reduce((acc, cur) => {
			const { category } = cur;
			if (!acc.includes(category)) {
			  acc.push(category);
			}
			return acc;
		  }, []);
		  return uniqueCategories;
	}
}

//     const uniqueCategories = response.reduce((acc, cur) => {
//       const { category } = cur;
//       if (!acc.includes(category)) {
//         acc.push(category);
//       }
//       return acc;
//     }, []);
//     const Categories = uniqueCategories.map(category => {
//       const products = response.filter(product => product.category === category);
//       return { category, products };

export default GetCategories;

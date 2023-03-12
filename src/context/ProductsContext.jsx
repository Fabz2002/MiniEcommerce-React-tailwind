import { useState, useEffect, createContext } from 'react';
import GetCategories from '../services/GetCategories';
import GetSupplies from '../services/GetSupplies';
export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const [categories, setCategories] = useState([]);
	const [supplies, setSupplies] = useState([]);
	const [allProductsCart, setAllProductsCart] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};
	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};
	useEffect(() => {
		fetchSupplies();
		fetchCategories();
	}, []);
	async function fetchCategories() {
		const categoris = await GetCategories();
		setCategories(categoris);
	}
	async function fetchSupplies() {
		const supplies = await GetSupplies();
		setSupplies(supplies);
	}

	return (
		<ProductsContext.Provider
			value={{
				showMenu,
				setShowMenu,
				showOrder,
				setShowOrder,
				toggleMenu,
				toggleOrders,
				categories,
				setCategories,
				supplies,
				allProductsCart,
				setAllProductsCart,
				total,
				setTotal,
				countProducts,
				setCountProducts,
			}}
		>
			{props.children}
		</ProductsContext.Provider>
	);
}

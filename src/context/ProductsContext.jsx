import { useState, useEffect, createContext } from 'react';
import GetCategories from '../services/GetCategories';
export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);
	const [categories, setCategories] = useState([]);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};
	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};
	useEffect(() => {
		fetchCategories();
	}, []);
	async function fetchCategories() {
		const categoris = await GetCategories();
		console.log(categoris);
		setCategories(categoris);
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
			}}
		>
			{props.children}
		</ProductsContext.Provider>
	);
}

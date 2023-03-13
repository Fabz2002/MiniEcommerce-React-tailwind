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
	function DeleteProduct(product) {
		if (product.quantity === 1) {
			product.quantity -= 1;
			setAllProductsCart(prevItems =>
				prevItems.filter(t => t.id !== product.id)
			);
			setCountProducts(countProducts - 1);
		}
		if (product.quantity > 1) {
			product.quantity -= 1;
			setCountProducts(countProducts - 1);
		}
	}
	function OnAddProduct(product) {
		if (allProductsCart.find(item => item.id === product.id)) {
			const products = allProductsCart.map(item =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			);
			setCountProducts(countProducts + 1);
			return setAllProductsCart(products);
		} else {
			product.quantity = 0;
			product.quantity += 1;
			setCountProducts(countProducts + 1);
		}

		setAllProductsCart([...allProductsCart, product]);
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
				DeleteProduct,
				OnAddProduct,
			}}
		>
			{props.children}
		</ProductsContext.Provider>
	);
}

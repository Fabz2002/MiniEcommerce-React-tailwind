import { useState, useEffect, createContext } from 'react';
import GetCategories from '../services/GetCategories';
import GetSupplies from '../services/GetSupplies';
import GetSuppliesFilter from '../services/GetSuppliesFilter';
import GetSuppliesSearched from '../services/GetSuppliesSearched';
import GetSuppliesByLowPrices from '../services/GetSuppliesByLowPrices';
export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
	const [showMenu, setShowMenu] = useState(false);
	const [totalItemPrice, setTotalItemPrice] = useState(0);
	const [showOrder, setShowOrder] = useState(false);
	const [categories, setCategories] = useState([]);
	const [supplies, setSupplies] = useState([]);
	const [allProductsCart, setAllProductsCart] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	const [showFilterProducts, setShowFilterProducts] = useState(false);
	const [categoryFiltered, setCategoryFiltered] = useState('');
	const [kword, setKword] = useState('');
	const [searching, setSearching] = useState(false);
	const [showLowPrices, setShowLowPrices] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};
	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};

	useEffect(() => {
		if (!searching && !showFilterProducts && !showLowPrices) {
			fetchCategories();
			fetchSupplies();
		}
		if (!showFilterProducts) {
			if (searching && kword !== '') {
				fetchSearchProducts();
			}
			if (kword === '') {
				setSearching(false);
			}
		}
		if (showFilterProducts) {
			fetchFilterProducts(categoryFiltered);
			setShowFilterProducts(false);
		}
		if (showLowPrices) {
			fetchSuppliesByLowPrices();
		}
	}, [kword, categoryFiltered, showLowPrices]);
	async function fetchCategories() {
		const categoris = await GetCategories();
		setCategories(categoris);
	}
	async function fetchSupplies() {
		const supplies = await GetSupplies();
		setSupplies(supplies);
	}
	async function fetchFilterProducts() {
		const productsFiltered = await GetSuppliesFilter({
			KindOfCategory: categoryFiltered,
		});
		console.log(productsFiltered);
		setSupplies(productsFiltered);
	}
	async function fetchSearchProducts() {
		const productSearched = await GetSuppliesSearched({ keyword: kword });
		setSupplies(productSearched);
	}
	async function fetchSuppliesByLowPrices() {
		const productByLowPrices = await GetSuppliesByLowPrices();
		setSupplies(productByLowPrices);
	}
	function DeleteProduct(product) {
		if (product.quantity === 1) {
			setTotalItemPrice(totalItemPrice - product.price * product.quantity);
			product.quantity -= 1;
			setAllProductsCart(prevItems =>
				prevItems.filter(t => t.id !== product.id)
			);
			setCountProducts(countProducts - 1);
		}
		if (product.quantity > 1) {
			product.quantity -= 1;
			console.log(totalItemPrice);
			setTotalItemPrice(totalItemPrice - product.price);
			setCountProducts(countProducts - 1);
		}
	}
	function OnAddProduct(product) {
		if (allProductsCart.find(item => item.id === product.id)) {
			const products = allProductsCart.map(item =>
				item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
			);
			setCountProducts(countProducts + 1);
			setTotalItemPrice(product.price * product.quantity + totalItemPrice);
			return setAllProductsCart(products);
		} else {
			product.quantity = 0;
			product.quantity += 1;
			setTotalItemPrice(product.price * product.quantity + totalItemPrice);
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
				showFilterProducts,
				setShowFilterProducts,
				setCategoryFiltered,
				totalItemPrice,
				setTotalItemPrice,
				kword,
				setKword,
				setSearching,
				searching,
				showLowPrices,
				setShowLowPrices,
			}}
		>
			{props.children}
		</ProductsContext.Provider>
	);
}

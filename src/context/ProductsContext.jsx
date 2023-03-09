import { useState, useEffect, createContext } from 'react';
export const ProductsContext = createContext();

export function ProductsContextProvider(props) {
	const [showMenu, setShowMenu] = useState(false);
	const [showOrder, setShowOrder] = useState(false);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setShowOrder(false);
	};
	const toggleOrders = () => {
		setShowOrder(!showOrder);
		setShowMenu(false);
	};

	return (
		<ProductsContext.Provider
			value={{
				showMenu,
				setShowMenu,
				showOrder,
				setShowOrder,
				toggleMenu,
				toggleOrders,
			}}
		>
			{props.children}
		</ProductsContext.Provider>
	);
}

import { createContext, ReactNode, useContext, useState } from "react";
import ShoppingCart from "../components/subcomponents/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartProviderProps = {
	children: ReactNode;
};

type ShoppingCartContextType = {
	openCart: () => void;
	closeCart: () => void;
	cartQuantity: number;
	cartItems: CartItem[];
	getItemQuantity: (id: number) => number;
	increaseCartQuantity: (id: number) => void;
	decreaseCartQuantity: (id: number) => void;
	removeFromCart: (id: number) => void;
};

type CartItem = {
	id: number;
	quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContextType);

export function useShoppingCart() {
	return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("Shopping-cart",[]);

	const cartQuantity = cartItems.reduce(
		(quantity, item) => item.quantity + quantity,
		0
	);

	const openCart = () => setIsOpen(true);
	const closeCart = () => setIsOpen(false);

	function getItemQuantity(id: number) {
		return cartItems.find((item) => item.id === id)?.quantity || 0;
	}
	function increaseCartQuantity(id: number) {
		setCartItems((currItems) => {
			const itemExists = currItems.some((item) => item.id === id);

			return itemExists
				? currItems.map((item) =>
						item.id === id
							? { ...item, quantity: item.quantity + 1 }
							: item
				  )
				: [...currItems, { id, quantity: 1 }];
		});
	}

	function decreaseCartQuantity(id: number) {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) =>
					item.id === id && item.quantity > 1
						? { ...item, quantity: item.quantity - 1 }
						: item
				);
			}
		});
	}

	function removeFromCart(id: number) {
		setCartItems((currItems) => currItems.filter((item) => item.id !== id));
	}

	return (
		<ShoppingCartContext.Provider
			value={{
				increaseCartQuantity,
				decreaseCartQuantity,
				removeFromCart,
				getItemQuantity,
				cartItems,
				cartQuantity,
				openCart,
				closeCart,
			}}
		>
			{children}
            < ShoppingCart isOpen={isOpen} />
		</ShoppingCartContext.Provider>
	);
}

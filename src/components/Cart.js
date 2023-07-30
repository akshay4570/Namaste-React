import React from "react";
import { useSelector, current, useDispatch } from "react-redux";
import { MenuItemCard } from "./Menu";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(clearCart());
	};
	console.log(cartItems);
	return (
		<div className="mx-60 my-10">
			<div className="flex justify-between">
				<h1 className="text-2xl font-bold">Cart Details</h1>
				<button
					className="bg-black rounded-md text-white p-2 text-bold"
					onClick={() => handleClearCart()}
				>
					Clear Cart
				</button>
			</div>
			<div className="my-10">
				{cartItems.length === 0 && (
					<h1 className="text-center font-bold">
						Please add items to your cart
					</h1>
				)}
				{cartItems.map((cartItem) => (
					<MenuItemCard
						key={cartItem?.card?.info?.id}
						menuCard={cartItem}
						cart={true}
					/>
				))}
			</div>
		</div>
	);
};

export default Cart;

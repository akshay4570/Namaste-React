import { CDN_URL, VEG_URL, NON_VEG_URL, MENU_API } from "../utils/constant";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

export const MenuItemCard = ({ menuCard, cart }) => {
	console.log(menuCard);
	const { id, name, category, description, imageId, isVeg, ratings, price } =
		menuCard?.card?.info;
	const dispatch = useDispatch();

	const handleAddItem = (menuCard) => {
		dispatch(addItem(menuCard));
	};
	return (
		<>
			<div className="menu-detail-item-content">
				<div className="menu-details-content">
					{isVeg ? (
						<img src={VEG_URL} className="symbol" />
					) : (
						<img src={NON_VEG_URL} className="symbol" />
					)}
					<h4 className="menu-detail-item-content-name">{name}</h4>
					<h5 className="menu-detail-item-content-cost">₹{price / 100}</h5>
					<br />
					<h5 className="menu-detail-item-content-desc">{description}</h5>
				</div>
				<div className="menu-details-img">
					<img src={CDN_URL + imageId} className="item-img" />
					{!cart && (
						<button
							className="menu-details-btn"
							onClick={() => handleAddItem(menuCard)}
						>
							Add +
						</button>
					)}
				</div>
			</div>
			<hr className="hr" />
		</>
	);
};
const MenuItem = ({ menuItem, showItems, setShowItems }) => {
	console.log(menuItem);
	const { title, itemCards } = menuItem?.card?.card;
	console.log(itemCards);
	console.log(menuItem?.card?.card.itemCards);

	// const [showItems, setshowItems] = useState(false);
	const [arrow, setArrow] = useState(<SlArrowUp />);
	return (
		<div className="menu-details-item">
			<div
				className="menu-header bg-gray-50 shadow-lg py-3 px-2 flex justify-between"
				onClick={() => {
					setShowItems();
					showItems ? setArrow(<SlArrowUp />) : setArrow(<SlArrowDown />);
				}}
			>
				{title} ({itemCards.length}){arrow}
			</div>
			<div className="menu-details-desc">
				{itemCards !== undefined &&
					itemCards.map(
						(menuCard) =>
							showItems && (
								<MenuItemCard
									key={menuCard.card.info.id}
									menuCard={menuCard}
									cart={false}
								/>
							)
					)}
			</div>
		</div>
	);
};
const Menu = (props) => {
	const { menu } = props;
	const [showItems, setShowItems] = useState(-1);
	console.log(menu);
	return (
		<div className="menu-details">
			{menu?.map((menuElement, index) => (
				<MenuItem
					key={index}
					menuItem={menuElement}
					showItems={index === showItems ? true : false}
					setShowItems={() => setShowItems(index)}
				/>
			))}
		</div>
	);
};

export default Menu;

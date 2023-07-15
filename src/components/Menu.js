import { CDN_URL, VEG_URL, NON_VEG_URL, MENU_API } from "../utils/constant";

const MenuItemCard = ({ menuCard }) => {
	const { id, name, category, description, imageId, isVeg, ratings, price } =
		menuCard?.card?.info;
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
					<button className="menu-details-btn">Add +</button>
				</div>
			</div>
			<hr className="hr" />
		</>
	);
};
const MenuItem = ({ menuItem }) => {
	console.log(menuItem);
	const { title, itemCards } = menuItem?.card?.card;
	console.log(itemCards);
	console.log(menuItem?.card?.card.itemCards);
	return (
		<div className="menu-details-item">
			<div className="menu-header">{title}</div>
			<div className="menu-details-desc">
				{itemCards !== undefined &&
					itemCards.map((menuCard) => (
						<MenuItemCard key={menuCard.card.info.id} menuCard={menuCard} />
					))}
			</div>
		</div>
	);
};
const Menu = (props) => {
	const { menu } = props;
	console.log(menu);
	return (
		<div className="menu-details">
			{menu?.cards.map((menuElement, index) =>
				index === 0 ? null : <MenuItem key={index} menuItem={menuElement} />
			)}
		</div>
	);
};

export default Menu;

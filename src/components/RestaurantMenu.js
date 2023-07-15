import { useState, useEffect } from "react";
import { MENU_API, CDN_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { BiStar, BiSolidTime } from "react-icons/bi";
import { HiCurrencyRupee } from "react-icons/hi";
import ReactSwitch from "react-switch";
import Menu from "./Menu";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const [restMenuDetails, setRestMenuDetails] = useState(null);
	const [restMenuDiscount, setRestMenuDiscount] = useState(null);
	const [menu, setMenu] = useState(null);
	const [checked, setChecked] = useState(false);
	useEffect(() => {
		fetchRestaurantMenu();
	}, []);

	const fetchRestaurantMenu = async () => {
		const data = await fetch(MENU_API + resId);

		const json = await data.json();

		setRestMenuDetails(json?.data);
		setRestMenuDiscount(json?.data);
		setMenu(json?.data);
	};

	if (restMenuDetails === null || restMenuDiscount === null || menu === null)
		return <Shimmer />;

	const {
		name,
		cuisines,
		locality,
		costForTwoMessage,
		avgRatingString,
		totalRatingsString,
		sla,
	} = restMenuDetails?.cards[0]?.card?.card?.info;

	const { offers } =
		restMenuDiscount?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

	console.log(menu);
	const menuDetails = menu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR;
	console.log(menu?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR);
	console.log(menuDetails);
	return (
		<div className="res-menu">
			<div className="res-menu-details">
				<div className="name-details">
					<h3 className="res-menu-name">{name}</h3>
					<h6 className="res-menu-cuisine">{cuisines.join(",")}</h6>
					<h6 className="res-menu-locality">
						{locality} {sla.lastMileTravelString}
					</h6>
				</div>
				<div className="rating-details">
					<div className="res-menu-rating">
						<BiStar color="green" size={15} /> {avgRatingString}
					</div>
					<hr />
					<div className="res-total-rating">{totalRatingsString}</div>
				</div>
			</div>
			<br />
			<hr className="dotted-line" />
			<div className="res-cost-discount">
				<div className="res-cost-details">
					<span className="res-menu-icons">
						<BiSolidTime size={20} />
					</span>
					<span className="res-menu-wait-time">{sla?.slaString}</span>
					<span className="res-menu-icons">
						<HiCurrencyRupee size={20} className="res-menu-icons" />
					</span>
					<span className="res-menu-cost">{costForTwoMessage}</span>
				</div>
				<br />
				<div className="res-offers">
					{offers.map((discount) => (
						<DiscountTab key={discount.info.offerIds[0]} discount={discount} />
					))}
				</div>
			</div>
			<br />
			<br />
			<div className="res-menu-items">
				<div className="toggle-switch">
					<span>Veg Only</span>{" "}
					<ReactSwitch
						checked={checked}
						onChange={() => {
							setChecked(!checked);
						}}
					/>
				</div>
				<br />
				<hr className="hr" />
				<Menu menu={menuDetails} />
			</div>
		</div>
	);
};

const DiscountTab = (props) => {
	const { discount } = props;

	return (
		<div className="discount-card">
			<div className="discount-details">
				<div className="coupon-image">
					<img
						src={CDN_URL + discount.info.logoBottom}
						className="coupon-image-detail"
					/>
				</div>
				<div className="discount-name">{discount.info.header}</div>
			</div>
			<div className="discount-description">
				<span>{discount.info.couponCode}</span> |&nbsp;
				<span>{discount.info.description}</span>
			</div>
		</div>
	);
};

export default RestaurantMenu;

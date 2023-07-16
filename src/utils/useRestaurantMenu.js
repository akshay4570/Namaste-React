import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
	const [restMenuDetails, setRestMenuDetails] = useState(null);
	const [restMenuDiscount, setRestMenuDiscount] = useState(null);
	const [menu, setMenu] = useState(null);

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

	const resMenuObj = { restMenuDetails, restMenuDiscount, menu };
	return resMenuObj;
};

export default useRestaurantMenu;

import Restaurant, { withRestaurantPromoted } from "./Restaurant";
import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
	const [restList, setRestList] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredRest, setFilteredRest] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(SWIGGY_API);

		const json = await data.json();

		setRestList(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredRest(json?.data?.cards[2]?.data?.data?.cards);
	};

	const handleSearch = (e) => {
		const inputValue = e.target.value;
		setSearchTerm(inputValue);

		const filteredList = restList.filter((res) => {
			return res.data.name.toLowerCase().includes(searchTerm.toLowerCase());
		});

		setFilteredRest(filteredList);
	};

	const onlineStatus = useOnlineStatus();

	if (onlineStatus !== true) {
		return (
			<div>
				Looks like your internet is not working!! Please check your connection
			</div>
		);
	}

	const RestaurantPromoted = withRestaurantPromoted(Restaurant);

	return restList.length === 0 ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="functionalities">
				<div className="filter">
					<button
						className="filter-btn"
						onClick={() => {
							const filteredList = restList.filter(
								(res) => res.data.avgRating > 4
							);
							setFilteredRest(filteredList);
						}}
					>
						Top Rated+
					</button>
				</div>
				<div className="search">
					<input
						type="text"
						className="searchbar"
						placeholder="Search by Restaurants"
						onChange={handleSearch}
						value={searchTerm}
					/>
					<span className="search-logo">
						<AiOutlineSearch size={20} />
					</span>
				</div>
			</div>
			<div className="res-container">
				{filteredRest.map((Element) => (
					<Link
						to={"/restaurant/" + Element.data.id}
						key={Element.data.id}
						className="link-tags-res"
					>
						{Element.data.promoted ? (
							<RestaurantPromoted resData={Element} />
						) : (
							<Restaurant resData={Element} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;

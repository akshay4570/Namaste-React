import Restaurant from "./Restaurant";
import resObj from "../utils/mockData";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Body = () => {
	const [restList, setRestList] = useState(resObj);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearch = (e) => {
		const inputValue = e.target.value;
		setSearchTerm(inputValue);

		const filteredList = restList.filter((res) => {
			return res.data.name.toLowerCase().includes(searchTerm.toLowerCase());
		});

		setRestList(filteredList);
	};
	return (
		<div className="body">
			<div className="functionalities">
				<div className="filter">
					<button
						className="filter-btn"
						onClick={() => {
							const filteredList = restList.filter(
								(res) => res.data.avgRating > 4
							);
							setRestList(filteredList);
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
				{restList.map((Element) => (
					<Restaurant key={Element.id} resData={Element} />
				))}
			</div>
		</div>
	);
};

export default Body;

const Restaurant = () => {
	return (
		<div className="shimmer-res-card">
			<div className="shimmer-img"></div>
			<div className="shimmer-res-details">
				<h3 className="shimmer-res-name"></h3>
				<h6 className="shimmer-res-cuisine"></h6>
				<div className="shimmer-res-additional-info">
					<div className="shimmer-res-rating"></div>
					<div className="shimmer-res-wait-time"></div>
					<div className="shimmer-res-meal"></div>
				</div>
			</div>
		</div>
	);
};
const Shimmer = () => {
	return (
		<div className="shimmer-body">
			<div className="shimmer-functionalities">
				<div className="shimmer-filter">
					<div className="shimmer-filter-btn"></div>
				</div>
				<div className="shimmer-search">
					<div className="shimmer-searchbar"></div>
				</div>
			</div>
			<div className="shimmer-res-container">
				<Restaurant />
				<Restaurant />
				<Restaurant />
				<Restaurant />
				<Restaurant />
				<Restaurant />
				<Restaurant />
				<Restaurant />
				<Restaurant />
				<Restaurant />
			</div>
		</div>
	);
};

export default Shimmer;

import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img src={LOGO_URL} className="logo" />
			</div>
			<div className="nav-container">
				<ul>
					<li>
						<Link to="/" className="link-tags">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about" className="link-tags">
							About Us
						</Link>
					</li>
					<li>
						<Link to="/contact" className="link-tags">
							Contact Us
						</Link>
					</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;

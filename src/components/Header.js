import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
	const cartItems = useSelector((store) => store.cart.items);

	return (
		<div className="header shadow-lg">
			<div className="logo-container">
				<img src={LOGO_URL} className="logo" />
			</div>
			<div className="nav-container my-10">
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
					<li>
						<Link to="/grocery" className="link-tags">
							Grocery
						</Link>
					</li>
					<li>
						<Link to="/cart" className="link-tags">
							<div className="flex justify-between m-auto">
								<AiOutlineShoppingCart size={30} />
								<span className="mx-2">Cart - ({cartItems.length})</span>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;

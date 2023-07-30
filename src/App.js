import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { FaUserCircle } from "react-icons/fa";
import { BiLogoAws } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStrore from "./utils/appStore";

// import Grocery from "./components/Grocery";

/*const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX
    </h1>
);

const HeadingComponent = () => (
    <>
        <div id="container">
            <Title />
            <h1 className="heading">React Functional component</h1>
        </div>
        <div className="container1">
            <h1 className="heading1">h2 tag</h1>
        </div>
    </>
);*/

// // Assignment
// const Logo = () => (
//     <>
//         <div className="logo">
//             <BiLogoAws size={40}/>
//         </div>
//     </>
// );

// const SearchBar = () => (
//     <>
//         <div className="searchBar">
//             <input type="text" id="search" />
//             <span id="searchIcon">
//                 <AiOutlineSearch size={25}/>
//             </span>
//         </div>
//     </>
// );

// const UserIcon = () => (
//     <>
//         <div className="userIcon">
//             <FaUserCircle size={30}/>
//         </div>
//     </>
// );

// const Header = () => (
//     <div className="header">
//         <Logo />
//         <SearchBar />
//         <UserIcon />
//     </div>
// );

//Swiggy App

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
	return (
		<Provider store={appStrore}>
			<div className="app">
				<Header />
				<Outlet />
			</div>
		</Provider>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "restaurant/:resId",
				element: <RestaurantMenu />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<Shimmer />}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/cart",
				element: <Cart />,
			},
		],
		errorElement: <Error />,
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

import React from "react";
import ReactDOM from "react-dom/client";
import { FaUserCircle } from "react-icons/fa";
import { BiLogoAws } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import Header from "./components/Header";
import Body from "./components/Body";



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

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

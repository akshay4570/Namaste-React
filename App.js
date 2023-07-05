import React from "react";
import ReactDOM from "react-dom/client";
import { FaUserCircle } from "react-icons/fa";
import { BiLogoAws } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import {BiStar} from "react-icons/bi";


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
const resObj = [{
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "689529",
    "name": "The Indian Food Story",
    "uuid": "8c27b03f-6046-4b84-abc5-495e4d1dc94a",
    "city": "1",
    "area": "Marathahalli",
    "totalRatingsString": "500+ ratings",
    "cloudinaryImageId": "8807626469b8e4a8632bf20fc04202a3",
    "cuisines": [
    "North Indian",
    "Punjabi",
    "Biryani",
    "Desserts",
    "Chaat",
    "Snacks"
    ],
    "tags": [],
    "costForTwo": 45000,
    "costForTwoString": "₹450 FOR TWO",
    "deliveryTime": 24,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "slaString": "24 MINS",
    "lastMileTravel": 1.2000000476837158,
    "slugs": {
    "restaurant": "the-indian-food-story-marathahalli-marathahalli",
    "city": "bangalore"
    },
    "cityState": "1",
    "address": "No. 5/3, Thubarahalli Village,Varthur Hobli, Bengaluru east Taluk, Bangalore Urban, Karnataka-560066",
    "locality": "Varthur Hobli",
    "parentId": 294086,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=7301733~p=1~eid=00000189-20f6-6383-2f22-4871003c0179~srvts=1688475165571",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "40% OFF",
    "subHeader": "UPTO ₹80",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "loyaltyDiscoverPresentationInfo": {
    "logoCtx": {
    "text": "BENEFITS",
    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
    },
    "freedelMessage": "FREE DELIVERY",
    "exclusiveOfferMessage": ""
    },
    "sla": {
    "restaurantId": "689529",
    "deliveryTime": 24,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "lastMileTravel": 1.2000000476837158,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.0",
    "totalRatings": 500,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "221738",
    "name": "Meghana Foods",
    "uuid": "106f4556-6804-4554-8c68-ee875d6acf65",
    "city": "1",
    "area": "Brookefield",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "aqsnrylokzpn45qhg1pb",
    "cuisines": [
    "Biryani",
    "Andhra",
    "South Indian",
    "North Indian",
    "Chinese",
    "Seafood"
    ],
    "tags": [],
    "costForTwo": 50000,
    "costForTwoString": "₹500 FOR TWO",
    "deliveryTime": 20,
    "minDeliveryTime": 20,
    "maxDeliveryTime": 20,
    "slaString": "20 MINS",
    "lastMileTravel": 2.799999952316284,
    "slugs": {
    "restaurant": "meghana-foods-mahadevpura-mahadevpura",
    "city": "bangalore"
    },
    "cityState": "1",
    "address": "Raj Pinnacle, Mahadevapura, Bengaluru, Karnataka, India",
    "locality": "Mahadevpura",
    "parentId": 635,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "2.7 kms",
    "hasSurge": false,
    "loyaltyDiscoverPresentationInfo": {
    "logoCtx": {
    "text": "BENEFITS",
    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
    },
    "freedelMessage": "FREE DELIVERY",
    "exclusiveOfferMessage": ""
    },
    "sla": {
    "restaurantId": "221738",
    "deliveryTime": 20,
    "minDeliveryTime": 20,
    "maxDeliveryTime": 20,
    "lastMileTravel": 2.799999952316284,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "4.3",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "10866",
    "name": "Pizza Hut",
    "uuid": "f33c4b17-c360-4ed1-b039-f1baddf59b0a",
    "city": "1",
    "area": "Marathahalli",
    "totalRatingsString": "10000+ ratings",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "cuisines": [
    "Pizzas"
    ],
    "tags": [],
    "costForTwo": 35000,
    "costForTwoString": "₹350 FOR TWO",
    "deliveryTime": 24,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "slaString": "24 MINS",
    "lastMileTravel": 1.2999999523162842,
    "slugs": {
    "restaurant": "pizza-hut-marathahalli-90-marathahalli",
    "city": "bangalore"
    },
    "cityState": "1",
    "address": "321/30, Munnekolalu Village, Varthur Hobli, Marthahalli",
    "locality": "Munnekolalu Village",
    "parentId": 721,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 2700,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 2700,
    "message": "",
    "title": "Delivery Charge",
    "amount": "2700",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "1.2 kms",
    "hasSurge": false,
    "aggregatedDiscountInfoV3": {
    "header": "50% OFF",
    "subHeader": "UPTO ₹100",
    "discountTag": "",
    "headerTypeV2": 0
    },
    "loyaltyDiscoverPresentationInfo": {
    "logoCtx": {
    "text": "BENEFITS",
    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
    },
    "freedelMessage": "FREE DELIVERY",
    "exclusiveOfferMessage": ""
    },
    "sla": {
    "restaurantId": "10866",
    "deliveryTime": 24,
    "minDeliveryTime": 24,
    "maxDeliveryTime": 24,
    "lastMileTravel": 1.2999999523162842,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": false,
    "avgRating": "3.7",
    "totalRatings": 10000,
    "new": false
    },
    "subtype": "basic"
    },
    {
    "type": "restaurant",
    "data": {
    "type": "F",
    "id": "444077",
    "name": "Magnolia Bakery",
    "uuid": "aa7575dc-f2a0-4b79-b8d5-82d8f9e43710",
    "city": "1",
    "area": "Mahadevpura",
    "totalRatingsString": "1000+ ratings",
    "cloudinaryImageId": "6f0945b8b18d9f4241dd1cd9a70e23d7",
    "cuisines": [
    "Bakery",
    "Desserts",
    "Ice Cream"
    ],
    "tags": [],
    "costForTwo": 50000,
    "costForTwoString": "₹500 FOR TWO",
    "deliveryTime": 40,
    "minDeliveryTime": 40,
    "maxDeliveryTime": 40,
    "slaString": "40 MINS",
    "lastMileTravel": 6.699999809265137,
    "slugs": {
    "restaurant": "magnolia-bakery-mahadevpura-mahadevpura",
    "city": "bangalore"
    },
    "cityState": "1",
    "address": "UNIT NO.UGK-01, UPPER GROUND FLOOR, PHOENIX MARKETCITY, SY NO.40 41, WHITEFIELD MAIN ROAD, MAHADEVAPURA, DYAVASANDRA INDUSTRIAL AREA, KRISHNARAJAPURAM HOBLI, BANGALORE.",
    "locality": "Phoenix Market City",
    "parentId": 267303,
    "unserviceable": false,
    "veg": false,
    "select": false,
    "favorite": false,
    "tradeCampaignHeaders": [],
    "ribbon": [
    {
    "type": "PROMOTED"
    }
    ],
    "chain": [],
    "feeDetails": {
    "fees": [
    {
    "name": "distance",
    "fee": 5800,
    "message": ""
    },
    {
    "name": "time",
    "fee": 0,
    "message": ""
    },
    {
    "name": "special",
    "fee": 0,
    "message": ""
    }
    ],
    "totalFees": 5800,
    "message": "",
    "title": "Delivery Charge",
    "amount": "5800",
    "icon": ""
    },
    "availability": {
    "opened": true,
    "nextOpenMessage": "",
    "nextCloseMessage": ""
    },
    "longDistanceEnabled": 0,
    "rainMode": "NONE",
    "thirdPartyAddress": false,
    "thirdPartyVendor": "",
    "adTrackingID": "cid=7228700~p=4~eid=00000189-20f6-6383-2f22-4872003c0400~srvts=1688475165571",
    "badges": {
    "imageBased": [],
    "textBased": [],
    "textExtendedBadges": []
    },
    "lastMileTravelString": "6.6 kms",
    "hasSurge": false,
    "loyaltyDiscoverPresentationInfo": {
    "logoCtx": {
    "text": "BENEFITS",
    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
    },
    "freedelMessage": "FREE DELIVERY",
    "exclusiveOfferMessage": ""
    },
    "sla": {
    "restaurantId": "444077",
    "deliveryTime": 40,
    "minDeliveryTime": 40,
    "maxDeliveryTime": 40,
    "lastMileTravel": 6.699999809265137,
    "lastMileDistance": 0,
    "serviceability": "SERVICEABLE",
    "rainMode": "NONE",
    "longDistance": "NOT_LONG_DISTANCE",
    "preferentialService": false,
    "iconType": "EMPTY"
    },
    "promoted": true,
    "avgRating": "4.3",
    "totalRatings": 1000,
    "new": false
    },
    "subtype": "basic"
    },{
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "634166",
        "name": "Burger King",
        "uuid": "f3834a94-916d-453c-ab25-f41e43886ad2",
        "city": "1",
        "area": "Whitefield",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
        "Burgers",
        "American"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 4.300000190734863,
        "slugs": {
        "restaurant": "burger-king-nexus-whitefield-mall-whitefield",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "FC-11 3rd floor,Nexus Whitefield Mal,  Whitefield, Bengaluru, Karnataka 560066",
        "locality": "Nexus Whitefield Mall",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3900,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3900,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3900",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "4.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹129",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "exclusiveOfferMessage": ""
        },
        "sla": {
        "restaurantId": "634166",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 4.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "528477",
        "name": "Third Wave Coffee",
        "uuid": "02bcee3b-77b9-4464-8e55-dfba11993793",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
        "cuisines": [
        "Beverages",
        "Desserts"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
        "restaurant": "third-wave-coffee-marathahalli-marathahalli",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "Thirdwave Coffee, Sy No.113/2, Sai Paryavaran House, Ground Floor, Kundalahalli Village, ITPL Road, Near Brookfields, AECS Layout, Marathahalli, Bengaluru, Mahadevapura , B.B.M.P East, Karnataka-56003",
        "locality": "AECS Layout",
        "parentId": 274773,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 2700,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7304618~p=7~eid=00000189-20f6-6383-2f22-4873003c0733~srvts=1688475165571",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "exclusiveOfferMessage": ""
        },
        "sla": {
        "restaurantId": "528477",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 1.2999999523162842,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 500,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "420659",
        "name": "Sri Lakshmi Biryani",
        "uuid": "eb227257-1596-441a-9c84-8265417d2d19",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "n7pn6ilfponvcatp0n73",
        "cuisines": [
        "Biryani",
        "North Indian",
        "Snacks"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 1.899999976158142,
        "slugs": {
        "restaurant": "sri-lakshmi-biryani-kadubeesanahalli-kadubeesanahalli",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "No 15&16 Srinivasa Reddy building, Lakshmi Narayana temple road, manunatha layout, munnekoll Bangalore 560037",
        "locality": "Manunatha Layout",
        "parentId": 193940,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 2700,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "1.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹599",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "exclusiveOfferMessage": ""
        },
        "sla": {
        "restaurantId": "420659",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "424658",
        "name": "Asha Tiffins",
        "uuid": "d79cd5d9-7158-45f1-a198-e563f0e46406",
        "city": "1",
        "area": "Aecs Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "hpncnz3sfv3gigsukkts",
        "cuisines": [
        "South Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 0.800000011920929,
        "slugs": {
        "restaurant": "asha-tiffins-marathahalli-marathahalli",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "#551,AECS Layout main road, 'B' Block AECS Layout,Opp.BBMP ward office,Marathahalli,Bangalore - 560037",
        "locality": "B Block",
        "parentId": 236243,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 2700,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹70",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "exclusiveOfferMessage": ""
        },
        "sla": {
        "restaurantId": "424658",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "47439",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "uuid": "aaeb7f0e-10ef-45cf-b45e-8da91b77ce6d",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "uxtqnke0nupbu1i1fmvf",
        "cuisines": [
        "American",
        "Snacks",
        "Turkish",
        "Portuguese",
        "Continental"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 3.799999952316284,
        "slugs": {
        "restaurant": "leon-grill-marathahalli-marathahalli",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "90/1 90/3, Opposite to Innovative Multiplex, Outer Ring Rd, Next to World Of Titan, Marathahalli, Bengaluru, Karnataka 560037",
        "locality": "Outer Ring Road",
        "parentId": 371281,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 3300,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 3300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3300",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7378544~p=13~eid=00000189-20f6-6383-2f22-4875003c0d37~srvts=1688475165571",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "exclusiveOfferMessage": ""
        },
        "sla": {
        "restaurantId": "47439",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 3.799999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "17303",
        "name": "KFC",
        "uuid": "11855eed-fdd9-4af1-b698-708a5bb3012f",
        "city": "1",
        "area": "Marathahalli",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
        "restaurant": "kfc-whitefield-whitefield",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "KFC Hypercity, Survey no . 6/2&6/3, Kundalahalli Gate, Thoobarahalli Village, Near Brookefield, ITPL Road, Varthur Hobli, Bangalore  - 37",
        "locality": "Thubarahalli",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 2700,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 2700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2700",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
        "logoCtx": {
        "text": "BENEFITS",
        "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
        },
        "freedelMessage": "FREE DELIVERY",
        "exclusiveOfferMessage": ""
        },
        "sla": {
        "restaurantId": "17303",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "lastMileTravel": 0.8999999761581421,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        }];
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://img.freepik.com/premium-vector/food-delivery-with-hand-logo-design_73539-613.jpg?w=740" className="logo"/>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Restaurant = (props) => {
    const { resData } = props; 

    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.data || {};
    return (
        <div className="res-card">
            <div className="res-img">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} className="res-img-detail" />
            </div>
            <div className="res-details">
                <h3 className="res-name">{name}</h3>
                <h6 className="res-cuisine">{cuisines.join(",")}</h6>
                <div className="res-additional-info">
                    <div className="res-rating">
                    <BiStar color="white" size={15}/> {avgRating}
                    </div>
                    <div className="res-wait-time">{deliveryTime} mins</div>
                    <div className="res-meal">₹{costForTwo / 100} FOR TWO</div>
                </div>
            </div>
            <div className="res-quick-view">
                <hr />
                Quick view
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search"> </div>
            <div className="res-container">
                {
                    resObj.map(resObjElement => <Restaurant key={resObjElement.id} resData = {resObjElement}/>)
                }
                
            </div>
        </div>
    )
}
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

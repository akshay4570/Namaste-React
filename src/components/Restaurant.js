import {BiStar} from "react-icons/bi";
import {CDN_URL} from "../utils/constant";

const Restaurant = (props) => {
    const { resData } = props; 

    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, deliveryTime} = resData?.data || {};
    return (
        <div className="res-card">
            <div className="res-img">
                <img src={CDN_URL+cloudinaryImageId} className="res-img-detail" />
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

export default Restaurant;
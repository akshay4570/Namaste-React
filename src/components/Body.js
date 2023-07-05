import Restaurant from "./Restaurant";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [restList, setRestList] = useState(resObj);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = restList.filter(res => res.data.avgRating > 4)
                    setRestList(filteredList)
                }}>Top Rated+</button>
            </div>
            <div className="search"> </div>
            <div className="res-container">
                {
                    restList.map(Element => <Restaurant key={Element.id} resData = {Element}/>)
                }
                
            </div>
        </div>
    )
}

export default Body;
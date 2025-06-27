import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  return (
    <div className="body">
      <div className="filter-btn">
        <button
          className="filter-btn"
          onClick={() => {
            //alert("Button clicked");
            const filtered = listOfRes.filter(
              (res) => res?.info?.avgRating >= 4.5
            );
            setListOfRes(filtered);
          }}
        >
          Top-rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;

import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info; // data de-structuring for better view. For initial format, check App-foodDeliveryStage1.js
  console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="food-logo"
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;

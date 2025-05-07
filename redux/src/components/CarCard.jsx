import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../redux/favouritesSlice";
const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);
  const isLiked = favourites.some((fav) => fav.id === car.id);

  const handleLikeToggle = () => {
    if (isLiked) {
      dispatch(removeFavourite(car.id));
    } else {
      dispatch(addFavourite(car));
    }
  };

  return (
    <div className="car-card">
      <button onClick={handleLikeToggle} className="like-button">
        <i
          className={`fa-heart fa-solid heart-icon ${
            isLiked ? "liked" : "not-liked"
          }`}
        ></i>
      </button>
      <img src={car.image} alt={car.title} className="car-image" />
      <div className="card-content">
        <p className="car-price">{car.price}</p>
        <h2 className="car-title">{car.title}</h2>
        <p className="car-details">{car.year} • {car.engine} • {car.mileage}</p>
        <p className="car-location">{car.location}, {car.time}</p>
      </div>
    </div>
  );
};

export default CarCard;

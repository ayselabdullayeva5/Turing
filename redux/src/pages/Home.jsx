import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import { carData } from "../components/CarData";

const Home = () => {
  return (
    <section className="home-section">
      <Link to="/favourites">
        <button className="favourites-button">
          <i className="fa-heart fa-solid heart-icon"></i>
          <p>Seçilmişlər</p>
        </button>
      </Link>
      <h1 className="site-title">Turbo.az</h1>
      <div className="home-grid">
        {carData.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default Home;

import { useSelector } from "react-redux";
import CarCard from "../components/CarCard";

const Favourites = () => {
    const favourites = useSelector((state) => state.favourites);

    return (
        <section className="favourites-section">
            <h1 className="site-title">Seçilmişlər</h1>
            {favourites.length === 0 ? (
                <p className="favourites-empty">Heç bir avtomobil seçilməyib.</p>
            ) : (
                <div className="favourites-grid">
                    {favourites.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Favourites;

import { Controller } from "react-hook-form";
function Brand({ control, brands, required, error }) {
    return (
        <div>
            <div className="part">
                <p>Marka <span>*</span></p>
                <Controller
                    name="brand"
                    control={control}
                    rules={{ required: required }}
                    render={({ field }) => (
                        <select {...field}>
                            <option value="">Seçin</option>
                            {brands.map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    )}
                />
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    )
}
export default Brand;

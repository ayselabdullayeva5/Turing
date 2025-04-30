import { Controller } from "react-hook-form";
function Number({ inputname, star, control, required, error }) {
    return (
        <div>
            <div className="part">
                <p>{inputname} <span>{star}</span></p>
                <Controller
                    name="number"
                    control={control}
                    rules={{ required: required }}
                    render={({ field }) => (
                        <input type="number" {...field} />
                    )}
                />
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    )
}
export default Number;
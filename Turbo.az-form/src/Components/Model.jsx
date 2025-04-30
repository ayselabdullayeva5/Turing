import { Controller } from "react-hook-form";
import { models } from "./Options"
function Model({ control, selectedBrand, error, required }) {
    return (
        <div>
            <div className="part">
                <p>Model <span>*</span></p>
                <Controller name="model"
                    control={control}
                    rules={{ required: required }}
                    render={({ field }) => (
                        <select {...field}>
                            <option value="">Seçin</option>
                            {selectedBrand && models[selectedBrand]?.map((model) => (
                                <option key={model} value={model}>{model}</option>
                            ))}
                        </select>
                    )}
                />
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    )
}
export default Model;
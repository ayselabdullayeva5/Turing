import { Controller } from "react-hook-form";

function Select({ control, error, name, required, label, options, star }) {
    return (
        <div>
            <div className="part">
                <p>{label} <span>{star}</span></p>
                <Controller name={name}
                    control={control}
                    rules={{ required: required }}
                    render={({ field }) => (
                        <select {...field}>
                            <option value="">Seçin</option>
                            {options.map((option) => (
                                <option key={option} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    )}
                />
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default Select;

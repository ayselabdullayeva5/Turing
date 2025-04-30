import { Controller } from "react-hook-form";

function Road({ title, options, control, required, error }) {
    return (
        <div>
            <div className="part">
                <p>{title} <span>*</span></p>
                <Controller
                    name="roadValue"
                    control={control}
                    render={({ field }) => (
                        <input type="number" {...field} />
                    )}
                />
                <Controller
                    name="currency"
                    control={control}
                    rules={{ required: required }}
                    render={({ field }) => (
                        <>
                            {options.map((option) => (
                                <label key={option}>
                                    <input
                                        type="radio"
                                        value={option}
                                        {...field}
                                    />
                                    {option}
                                </label>
                            ))}
                        </>
                    )}
                />
            </div>
            {error?.currency && <p className="error">{error.currency.message}</p>}
        </div>
    )
}
export default Road;
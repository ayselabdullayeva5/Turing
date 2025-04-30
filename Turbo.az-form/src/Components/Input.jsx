import { Controller } from "react-hook-form";

function Input({ type, name, inputname, error, placeholder, control, required, star, hint }) {
    return (
        <div>
            <p>{inputname} <span>{star}</span></p>
            <Controller
                control={control}
                name={name}
                rules={{ required: required }}
                render={({ field }) => (
                    <input
                        {...field}
                        type={type}
                        placeholder={placeholder}
                    />
                )}
            />
            <p className="hint">{hint}</p>
            { error  && <p className="error">{error}</p>}
        </div>
    )
}
export default Input;
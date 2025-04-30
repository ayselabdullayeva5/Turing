import { Controller } from "react-hook-form";
function Checkbox({
    className,
    title,
    options,
    name,
    control,
}) {
    return (
        <div className={className}>
            <p>{title}</p>
            <Controller control={control}
                name={name}
                render={({ field }) => (
                    <div className="gap">
                        {options.map((option) => (
                            <label key={option}>
                                <input
                                    type="checkbox"
                                    {...field}
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                )}
            />
        </div>
    );
}

export default Checkbox;  
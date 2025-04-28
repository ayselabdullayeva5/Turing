function MapComponent({
    className,
    title,
    options,
    type,
    name,
    formData,
    handleChange,
    error,
}) {
    const isChecked = (option) => {
        if (type === "checkbox") {
            return formData[name]?.includes(option);
        }
        return formData[name] === option;
    };

    return (
        <div className={className}>
            <p>{title}</p>
            <div className="gap">
                {options.map((option) => (
                    <label key={option}>
                        <input
                            type={type}
                            name={name}
                            value={option}
                            checked={isChecked(option)}
                            onChange={handleChange}
                        />
                        {option}
                    </label>
                ))}
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default MapComponent;  
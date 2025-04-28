function Input({ type, name, inputname, error, onChange, value, placeholder, min, max }) {
    return (
        <div>
            <p>{inputname}</p>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                min={min}
                max={max}
                onChange={onChange}
            />
            {{ error } && <p className="error">{error}</p>}
        </div>
    )
}
export default Input;
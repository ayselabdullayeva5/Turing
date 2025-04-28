function Select({ error, value, onChange }) {
    return (
        <div>
            <p>Level:</p>
            <select name="level"
                value={value}
                onChange={onChange}
            >
                <option value="">Select level</option>
                <option>Freshman</option>
                <option>Sophomore</option>
                <option>Junior</option>
                <option>Senior</option>
            </select>
            {{error} && <p className="error">{error}</p>}
        </div>
    )
}
export default Select;
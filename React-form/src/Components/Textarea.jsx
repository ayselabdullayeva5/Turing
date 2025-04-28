function Textarea({ value, onChange }) {
    return (
        <div className="bio">
            <p>Biographical Statement:</p>
            <textarea
                name="bio"
                placeholder="A bit about you"
                rows={3}
                cols={100}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}
export default Textarea;
import { Controller } from "react-hook-form";

function Textarea({ control, name }) {
    return (
        <div className="extra">
            <p>Əlavə məlumat</p>
            <Controller name={name}
                control={control}
                render={({ field }) => (
                    <textarea {...field}
                        rows={5}
                        cols={100}
                        placeholder="Avtomobil haqqında əlavə məlumat"
                    />
                )}
            />
            <p className="hint">telefon nömrələri qeyd etmək qadağandır</p>
        </div>
    )
}
export default Textarea;
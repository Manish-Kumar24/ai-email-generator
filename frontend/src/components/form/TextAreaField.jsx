function TextAreaField({
    label,
    placeholder,
    value,
    onChange,
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-medium">
                {label}
            </label>

            <textarea
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                rows={5}
                className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
        </div>
    );
}

export default TextAreaField;
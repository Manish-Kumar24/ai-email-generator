function InputField({
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

            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    );
}

export default InputField;
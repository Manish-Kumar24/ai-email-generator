function SelectField({
    label,
    value,
    onChange,
    options,
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-medium">
                {label}
            </label>

            <select
                value={value}
                onChange={onChange}
                className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="">
                    Select an option
                </option>

                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default SelectField;
function ClearButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="w-full border py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
            Clear Form
        </button>
    );
}

export default ClearButton;
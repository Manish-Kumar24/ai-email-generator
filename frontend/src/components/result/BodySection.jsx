import toast from "react-hot-toast";

function BodySection({ body }) {

    const handleCopyBody = async () => {
        try {
            await navigator.clipboard.writeText(body);
            toast.success("Email copied!");
        } catch (error) {
            toast.error("Copy failed!");
            console.error(error)
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">
                    Email Body
                </h3>

                <button
                    onClick={handleCopyBody}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                    Copy Email
                </button>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50 whitespace-pre-wrap">
                {body}
            </div>
        </div>
    );
}

export default BodySection;
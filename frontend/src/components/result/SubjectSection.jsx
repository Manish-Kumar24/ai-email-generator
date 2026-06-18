import toast from "react-hot-toast";

function SubjectSection({ subject }) {

    const handleCopySubject = async () => {
        try {
            await navigator.clipboard.writeText(subject);
            toast.success("Subject copied!");
        } catch (error) {
            toast.error("Copy failed!");
            console.error(error);
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">
                    Subject
                </h3>

                <button
                    onClick={handleCopySubject}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                >
                    Copy Subject
                </button>
            </div>

            <div className="border rounded-lg p-4 bg-gray-50">
                {subject}
            </div>
        </div>
    );
}

export default SubjectSection;
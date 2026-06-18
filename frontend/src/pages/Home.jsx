import { useState } from "react";
import EmailForm from "../components/form/EmailForm";
import EmailResult from "../components/result/EmailResult";
import toast from "react-hot-toast";
import { generateEmail } from "../services/emailService";

function Home() {
    const [purpose, setPurpose] = useState("");
    const [recipient, setRecipient] = useState("");
    const [tone, setTone] = useState("");
    const [length, setLength] = useState("");
    const [instructions, setInstructions] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [generatedSubject, setGeneratedSubject] = useState("");
    const [generatedBody, setGeneratedBody] = useState("");

    const handleGenerate = async () => {

        if (!purpose.trim()) {
            toast.error("Please enter email purpose");
            return;
        }

        if (!recipient) {
            toast.error("Please select recipient");
            return;
        }

        if (!tone) {
            toast.error("Please select tone");
            return;
        }

        if (!length) {
            toast.error("Please select email length");
            return;
        }

        try {
            setLoading(true);

            const data = await generateEmail({
                purpose,
                recipient,
                tone,
                length,
                instructions,
            });

            setGeneratedSubject(data.subject);
            setGeneratedBody(data.body);

            toast.success("Email generated successfully");
        }
        catch (error) {
            console.error(error);

            toast.error("Failed to generate email");
        }
        finally {
            setLoading(false);
        }
    };


    const handleClear = () => {
        setPurpose("");
        setRecipient("");
        setTone("");
        setLength("");
        setInstructions("");

        setError("");

        setGeneratedSubject("");
        setGeneratedBody("");
        toast.success("Form cleared")
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                AI Email Generator
            </h1>

            <EmailForm
                purpose={purpose}
                setPurpose={setPurpose}
                recipient={recipient}
                setRecipient={setRecipient}
                tone={tone}
                setTone={setTone}
                length={length}
                setLength={setLength}
                instructions={instructions}
                setInstructions={setInstructions}
                handleGenerate={handleGenerate}
                loading={loading}
                handleClear={handleClear}
            />
            {
                generatedSubject && generatedBody && (
                    <EmailResult
                        generatedSubject={generatedSubject}
                        generatedBody={generatedBody}
                        onRegenerate={handleGenerate}
                    />
                )
            }

            {/* <EmailResult
                generatedSubject={generatedSubject}
                generatedBody={generatedBody}
                onRegenerate={handleGenerate}
            /> */}

            <div className="mt-6">
                <p><strong>Purpose:</strong> {purpose}</p>
                <p><strong>Recipient:</strong> {recipient}</p>
                <p><strong>Tone:</strong> {tone}</p>
                <p><strong>Length:</strong> {length}</p>
                <p><strong>Instructions:</strong> {instructions}</p>
            </div>
        </div>
    );
}

export default Home;
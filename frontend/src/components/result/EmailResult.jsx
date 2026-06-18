import SubjectSection from "./SubjectSection";
import BodySection from "./BodySection";
import RegenerateButton from "./RegenerateButton";

function EmailResult({
    generatedSubject,
    generatedBody,
    onRegenerate,
}) {
    return (
        <div className="mt-8 space-y-6">
            <h2 className="text-2xl font-bold">
                Generated Email
            </h2>

            <SubjectSection
                subject={generatedSubject}
            />

            <BodySection
                body={generatedBody}
            />

            <RegenerateButton
                onClick={onRegenerate}
            />
        </div>
    );
}

export default EmailResult;
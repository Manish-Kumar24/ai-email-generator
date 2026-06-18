import InputField from "./InputField";
import SelectField from "./SelectField";
import { RECIPIENT_OPTIONS, TONE_OPTIONS, LENGTH_OPTIONS } from "../../utils/constants";
import TextAreaField from "./TextAreaField";
import GenerateButton from "./GenerateButton";
import ClearButton from "./ClearButton";
function EmailForm({
    purpose,
    setPurpose,
    recipient,
    setRecipient,
    tone,
    setTone,
    length,
    setLength,
    instructions,
    setInstructions,
    handleGenerate,
    handleClear,
}) {
    return (
        <div className="space-y-4">
            <InputField
                label="Purpose *"
                placeholder="Enter the purpose of your email..."
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
            />
            <SelectField
                label="Recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                options={RECIPIENT_OPTIONS}
            />
            <SelectField
                label="Tone"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                options={TONE_OPTIONS}
            />
            <SelectField
                label="Length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                options={LENGTH_OPTIONS}
            />
            <TextAreaField
                label="Additional Instructions"
                placeholder="Mention any specific details you want included..."
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
            />
            <GenerateButton
                onClick={handleGenerate}
            />
            <ClearButton
                onClick={handleClear}
            />
        </div>
    );
}

export default EmailForm;
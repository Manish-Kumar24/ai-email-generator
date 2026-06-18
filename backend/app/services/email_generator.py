from groq import Groq
from app.config.settings import GROQ_API_KEY, MODEL_NAME

client = Groq(api_key=GROQ_API_KEY)


def build_prompt(purpose, recipient, tone, length, instructions):
    return f"""
You are an expert email writer.

Generate a professional email.

DETAILS:
Purpose: {purpose}
Recipient: {recipient}
Tone: {tone}
Length: {length}
Additional Instructions: {instructions}

Return EXACT format:

SUBJECT: <subject here>
BODY: <email body here>
"""


def generate_email(purpose, recipient, tone, length, instructions):
    prompt = build_prompt(purpose, recipient, tone, length, instructions)

    response = client.chat.completions.create(
        model=MODEL_NAME,
        messages=[
            {"role": "system", "content": "You are a professional email writing assistant."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7
    )

    content = response.choices[0].message.content

    return parse_response(content)


def parse_response(text: str):
    subject = ""
    body = ""

    if "SUBJECT:" in text and "BODY:" in text:
        parts = text.split("BODY:")
        subject = parts[0].replace("SUBJECT:", "").strip()
        body = parts[1].strip()

    return {
        "subject": subject,
        "body": body
    }
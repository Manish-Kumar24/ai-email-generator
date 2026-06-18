from pydantic import BaseModel


class EmailRequest(BaseModel):
    purpose: str
    recipient: str
    tone: str
    length: str
    instructions: str


class EmailResponse(BaseModel):
    subject: str
    body: str
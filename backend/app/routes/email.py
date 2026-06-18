from fastapi import APIRouter
from app.schemas.email import EmailRequest, EmailResponse
from app.services.email_generator import generate_email

router = APIRouter()


@router.post("/generate-email", response_model=EmailResponse)
async def generate_email_route(payload: EmailRequest):

    result = generate_email(
        payload.purpose,
        payload.recipient,
        payload.tone,
        payload.length,
        payload.instructions
    )

    return EmailResponse(
        subject=result["subject"],
        body=result["body"]
    )
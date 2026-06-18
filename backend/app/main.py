from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.email import router as email_router

app = FastAPI(
    title="AI Email Generator API"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For development only
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(email_router)
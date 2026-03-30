from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import chat

app = FastAPI(
    title="PCOS AI Health Coach",
    description="AI-powered PCOS assistant using RAG",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "PCOS AI Coach is running"}

app.include_router(chat.router, prefix="/chat", tags=["Chat"])
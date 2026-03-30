from fastapi import APIRouter
from pydantic import BaseModel
from services.rag_service import get_context
from services.llm_service import generate_response

router = APIRouter()

class ChatRequest(BaseModel):
    message: str
    history: list = []

@router.post("/")
def chat(req: ChatRequest):
    context = get_context(req.message)
    response = generate_response(req.message, context, req.history)
    return {"response": response}
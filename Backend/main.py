from fastapi import FastAPI
from pydantic import BaseModel
import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()  

app = FastAPI()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
def chat(req: ChatRequest):
    if not os.getenv("OPENAI_API_KEY"):
        return {"error": "API key missing or invalid"}

    response = client.responses.create(  
        model="gpt-4.1-mini",
        input=f"You are a PCOS health coach. Answer safely.\n\nUser question: {req.message}"
    )

    return {"response": response.output_text}
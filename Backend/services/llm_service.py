from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../.env"))

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def generate_response(query, context, history=[]):
    messages = [
        {
            "role": "system",
            "content": """You are Maya, a warm and professional PCOS health coach.
You help women manage PCOS through evidence-based diet, exercise, and lifestyle advice.
Always be empathetic, supportive, and encouraging.
Never diagnose. Always recommend consulting a doctor for medical decisions.
Format responses clearly with short paragraphs. Use bullet points when listing foods or tips."""
        }
    ]

    
    for msg in history[-6:]:
        messages.append(msg)

    
    messages.append({
        "role": "user",
        "content": f"Context from PCOS knowledge base:\n{context}\n\nQuestion: {query}"
    })

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=messages
    )
    return response.choices[0].message.content
from groq import Groq
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../.env"))

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def generate_response(query, context):
    prompt = f"""You are a professional PCOS health coach.
Use the context below to answer safely and medically responsibly.

Context:
{context}

User Question:
{query}

Rules:
- Do not give dangerous medical advice
- Suggest lifestyle changes (diet, exercise, stress management)
- If serious → recommend seeing a doctor

Answer:"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content
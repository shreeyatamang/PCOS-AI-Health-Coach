import os
from dotenv import load_dotenv
from rag.vector_store import load_vector_store, retrieve_docs

load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../.env"))

db = load_vector_store()

def get_context(query: str) -> str:
    docs = retrieve_docs(query, db)
    return "\n\n".join(docs)
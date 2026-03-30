import pickle
import os
from langchain_huggingface import HuggingFaceEmbeddings

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PKL_PATH = os.path.join(BASE_DIR, "vector_store.pkl")

def load_vector_store():
    with open(PKL_PATH, "rb") as f:
        return pickle.load(f)

def retrieve_docs(query, db, k=3):
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    docs = db.similarity_search(query, k=k)
    return [doc.page_content for doc in docs]
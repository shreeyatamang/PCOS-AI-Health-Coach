import os
import pickle
from langchain_text_splitters import CharacterTextSplitter
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(os.path.abspath(__file__)), "../../.env"))

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_PATH = os.path.join(BASE_DIR, "data")
PKL_PATH  = os.path.join(BASE_DIR, "vector_store.pkl")

def load_all_text():
    all_text = ""
    for file in os.listdir(DATA_PATH):
        if file.endswith(".txt"):
            with open(os.path.join(DATA_PATH, file), "r", encoding="utf-8") as f:
                all_text += f.read() + "\n"
    return all_text

def ingest_documents():
    text = load_all_text()
    splitter = CharacterTextSplitter(chunk_size=400, chunk_overlap=80)
    docs = splitter.split_text(text)
    embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
    db = FAISS.from_texts(docs, embeddings)
    with open(PKL_PATH, "wb") as f:
        pickle.dump(db, f)
    print(f"Ingested {len(docs)} chunks → {PKL_PATH}")

if __name__ == "__main__":
    ingest_documents()
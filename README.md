# PCOS AI Health Coach  

An AI-powered health coach for women with PCOS (Polycystic Ovary Syndrome). Ask questions about diet, exercise, hormones, stress, and symptoms — and get warm, medically responsible answers backed by trusted sources.

---

##  How It Works

This app uses **RAG (Retrieval-Augmented Generation)**:

1. PCOS knowledge base (Mayo Clinic, NHS, Cleveland Clinic, research papers) is chunked and embedded locally using HuggingFace
2. When a user asks a question, the most relevant chunks are retrieved from a FAISS vector store
3. The retrieved context + question is sent to **Groq's Llama 3.3 70B** model
4. The model responds as a professional PCOS coach

---

##  Getting Started

### 1. Clone the repo
```bash
git@github.com:shreeyatamang/PCOS-AI-Health-Coach.git
cd PCOS-AI-Health-Coach
```

### 2. Create and activate virtual environment
```bash
python -m venv venv
venv\Scripts\activate     # Windows
source venv/bin/activate  # Mac/Linux
```

### 3. Install dependencies
```bash
cd backend
pip install -r requirements.txt
```

### 4. Set up environment variables
Create a `.env` file in the project root:
```
GROQ_API_KEY=your_groq_api_key_here
```
Get a free Groq API key at → https://console.groq.com

### 5. Build the vector store (run once)
```bash
python -m rag.ingest
```

### 6. Start the backend
```bash
uvicorn app.main:app --reload
```

### 7. Open the frontend
Open `frontend/index.html` in your browser. That's it!

---

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GROQ_API_KEY` | Your Groq API key | ✅ Yes |

---

## ⚠️ Disclaimer

This app is for **educational purposes only**. It does not replace professional medical advice. Always consult a qualified healthcare provider for medical decisions.

---

##  Knowledge Sources

- [Mayo Clinic — PCOS Diet](https://www.mayoclinic.org)
- [NHS — PCOS & Insulin Resistance](https://www.nhs.uk)
- [Cleveland Clinic — PCOS Treatment](https://my.clevelandclinic.org)
- Peer-reviewed research on insulin resistance in PCOS

---

## Future Improvements

- [ ] User authentication and chat history
- [ ] Symptom tracker and period calendar
- [ ] Mobile app version
- [ ] Multi-language support

---

Made with 💗 to support women with PCOS 🌸

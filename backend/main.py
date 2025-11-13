from fastapi import FastAPI

app = FastAPI(title="Datronyx Placeholder API")

@app.get('/health')
def health_status():
    return {"status": "ok", "message": "API placeholder is running"}
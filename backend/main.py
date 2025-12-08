import time
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from sqlalchemy.exc import OperationalError
import models
from database import engine, get_db

app = FastAPI()

# --- CORS ---
# Allow requests from your frontend
origins = [
    "http://localhost:3000",
    "http://localhost",
    "https://datronyx.com", 
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- DB CONNECTION RETRY LOGIC ---
# Retries connecting to DB for 30 seconds (helps handle container startup order)
def create_tables():
    retries = 5
    while retries > 0:
        try:
            models.Base.metadata.create_all(bind=engine)
            print("Database connected and tables created.")
            break
        except OperationalError:
            print("Database not ready, retrying in 5 seconds...")
            retries -= 1
            time.sleep(5)

create_tables()

# --- SCHEMA ---
class SubscriptionRequest(BaseModel):
    email: EmailStr

# --- ENDPOINT ---
@app.post("/api/subscribe", status_code=status.HTTP_201_CREATED)
def subscribe_newsletter(request: SubscriptionRequest, db: Session = Depends(get_db)):
    # 1. Check if exists
    existing_user = db.query(models.Subscriber).filter(models.Subscriber.email == request.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="You are already subscribed."
        )

    # 2. Add new subscriber
    try:
        new_subscriber = models.Subscriber(email=request.email)
        db.add(new_subscriber)
        db.commit()
        db.refresh(new_subscriber)
        return {"message": "Subscription successful", "id": new_subscriber.id}
    except Exception as e:
        db.rollback()
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
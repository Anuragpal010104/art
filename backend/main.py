from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/sign_s3")
async def sign_s3():
    # Return a mock signed URL response
    return {"url": "https://mock-s3-url.com/signed-url", "fields": {}}

@app.get("/")
def root():
    return {"message": "Art Platform FastAPI backend running."}

@app.post("/api/process_image")
async def process_image(request: Request):
    data = await request.json()
    image_url = data.get("image_url")
    # Mock processing
    return {"status": "processing complete", "image_url": image_url}

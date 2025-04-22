# Art Platform Starter

A GitHub-ready starter template for an art platform with a Next.js frontend, Python FastAPI backend, and AWS S3 integration for image uploads.

## Frontend (Next.js)
- Next.js (App Router, TypeScript, TailwindCSS)
- Pages: Home, Upload, Gallery, Try-on
- Shared layout with navigation
- Reusable components folder

## Backend (FastAPI)
- FastAPI app with CORS
- `/api/sign_s3` (mock signed URL)
- `/api/process_image` (accepts image URL)
- `ml/` directory for future ML scripts

## Setup & Running Instructions

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # On Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

### Notes on AWS S3
- To enable real S3 uploads, configure AWS credentials and update the `/api/sign_s3` endpoint in `backend/main.py`.
- See [boto3 docs](https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html) for credential setup.

---

This project is minimal and ready to extend for your art platform needs.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

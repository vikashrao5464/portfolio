# IntervAI — AI-Powered Interview Practice Platform

## Overview

IntervAI is a full-stack AI mock-interview platform that helps job seekers practise role-specific interviews and improve before real interviews. Users can sign in with Google, optionally upload a PDF resume, receive AI-generated questions tailored to their profile, answer in a timed interview environment, and get an AI-generated performance report.

The platform also supports interview history, downloadable PDF reports, a credit-based usage model, and secure Razorpay payments for purchasing additional credits.

## Problem It Solves

Interview preparation is often generic and lacks immediate, personalised feedback. IntervAI solves this by:

- Creating questions based on the candidate's role, experience, skills, projects, and resume.
- Simulating interview pressure with question timers and an AI voice interviewer.
- Evaluating each response for confidence, communication, and correctness.
- Saving reports so users can track improvement across multiple practice interviews.

## Key Features

- Google authentication using Firebase.
- JWT-based protected backend APIs using HTTP-only cookies.
- PDF resume upload and AI-powered resume analysis.
- Technical and HR interview modes.
- Five AI-generated interview questions with progressive difficulty.
- Timed interview experience with browser text-to-speech and speech-to-text support.
- AI evaluation of every answer, including score and concise feedback.
- Overall report with question-wise scores and performance visualisation.
- Downloadable PDF performance report.
- Saved interview history.
- Credit-based interview access.
- Razorpay payment integration with server-side signature verification.

## Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React | Builds the component-based user interface. |
| Vite | Provides a fast development server and production build process. |
| React Router | Handles routes such as Home, Interview, History, Pricing, and Report. |
| Redux Toolkit | Stores globally shared user data and credit balance. |
| Axios | Sends HTTP requests to the Express backend. |
| Tailwind CSS | Creates responsive UI styling with utility classes. |
| Motion | Adds transitions and interactive animations. |
| Firebase Authentication | Provides Google sign-in on the client. |
| Web Speech API | Reads questions aloud and converts spoken answers to text. |
| Recharts | Renders the question-wise performance graph. |
| jsPDF + AutoTable | Generates the downloadable PDF report in the browser. |
| React Circular Progressbar | Displays timer and score progress visually. |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime for the server. |
| Express | Builds REST APIs and manages middleware/routes. |
| MongoDB | Stores users, interviews, questions, answers, scores, and payments. |
| Mongoose | Defines schemas and communicates with MongoDB. |
| JWT | Creates authenticated user sessions. |
| Cookie Parser | Reads the JWT authentication cookie in Express. |
| Multer | Handles uploaded resume PDFs. |
| PDF.js | Extracts text from uploaded PDF resumes. |
| OpenRouter | Connects the backend to the AI model. |
| GPT-4o-mini | Analyses resumes, generates questions, and evaluates answers. |
| Razorpay | Creates payment orders and processes credit purchases. |
| Crypto | Verifies Razorpay signatures using HMAC SHA-256. |

## Why This Stack

- **React + Vite** offers a fast, responsive, modern frontend development experience.
- **Express** keeps the backend simple and flexible for REST endpoints, authentication, file uploads, AI calls, and payments.
- **MongoDB** is suitable because each interview naturally contains nested question, answer, feedback, and score data in one document.
- **Firebase** avoids implementing Google OAuth popup handling from scratch.
- **JWT cookies** allow the backend to securely identify authenticated users on protected API calls.
- **OpenRouter with GPT-4o-mini** provides a cost-effective AI layer for structured and natural-language tasks.
- **Razorpay** is a suitable payment provider for INR payments and includes secure server-side verification.

## High-Level Architecture

```text
React + Vite Client
        |
        | Axios requests with JWT cookie
        v
Node.js + Express API
        |
        +-- MongoDB / Mongoose       -> User, Interview, Payment data
        +-- Firebase Auth            -> Google sign-in on client
        +-- OpenRouter / GPT-4o-mini -> Resume analysis, questions, scoring
        +-- Multer + PDF.js          -> PDF resume processing
        +-- Razorpay                 -> Payments and credit purchases
```

## Application Flow

### 1. Application Startup

When the application loads, `App.jsx` calls `GET /api/user/current-user` with credentials enabled. If the browser has a valid JWT cookie, the backend returns the current user. The frontend saves that user in Redux, including the available credits.

### 2. Google Authentication

1. The user clicks **Continue with Google**.
2. Firebase opens the Google sign-in popup.
3. Firebase returns the signed-in user's name and email.
4. The client sends them to `POST /api/auth/google`.
5. The backend finds the existing user by email or creates a new user.
6. New users receive 100 credits by default.
7. The backend creates a JWT with the user's ID and stores it in an HTTP-only cookie for seven days.
8. The frontend receives and stores the user data in Redux.

### 3. Interview Setup and Resume Analysis

The user enters:

- Target role
- Experience
- Interview mode: Technical or HR
- Optional PDF resume

If a resume is uploaded:

1. The client sends it as `multipart/form-data` to `POST /api/interview/resume`.
2. Multer stores the uploaded file temporarily.
3. PDF.js extracts text from every page.
4. The extracted text is sent to the AI service.
5. The AI returns structured role, experience, project, and skill information.
6. The frontend fills the setup form and displays the extracted skills and projects.
7. The temporary upload is deleted after processing.

### 4. Question Generation

When the user starts an interview, the client sends role, experience, interview mode, resume text, skills, and projects to `POST /api/interview/generate-questions`.

The backend:

1. Validates the required setup values.
2. Confirms that the authenticated user exists.
3. Checks that the user has at least 50 credits.
4. Sends a detailed prompt to the AI model.
5. Requests exactly five practical questions based on the candidate's data.
6. Deducts 50 credits.
7. Creates an Interview record in MongoDB.
8. Returns the interview ID, generated questions, username, and remaining credits.

| Question | Difficulty | Time Limit | Primary Focus |
|---|---|---:|---|
| 1 | Easy | 60 seconds | Skill-based |
| 2 | Easy | 60 seconds | Skill-based |
| 3 | Medium | 90 seconds | Skill-based |
| 4 | Medium | 90 seconds | Project-based |
| 5 | Hard | 120 seconds | Project-based |

### 5. Live Interview Experience

The interview screen uses a three-part experience: AI interviewer video, spoken questions, and a timed answer area.

1. The AI gives an introduction using browser text-to-speech.
2. It reads the current interview question aloud.
3. The question timer starts after the question is ready.
4. The user can type an answer or use browser speech recognition to fill the answer field.
5. The user submits the answer, or it is submitted automatically when time reaches zero.
6. The backend returns concise AI feedback.
7. The feedback is displayed and read aloud.
8. The user proceeds to the next question until all five questions are complete.

### 6. Answer Evaluation

For every answer, the frontend calls `POST /api/interview/submit-answer`.

The backend handles two special cases:

- No answer: assigns score `0` and stores a no-answer message.
- Time limit exceeded: assigns score `0` and does not evaluate the answer.

For a valid answer, the backend sends the question and answer to the AI model. The model returns:

```json
{
  "confidence": 0,
  "communication": 0,
  "correctness": 0,
  "finalScore": 0,
  "feedback": "Short professional feedback"
}
```

The backend saves these values inside the relevant question in the Interview document.

### 7. Final Report

After the final question, the frontend calls `POST /api/interview/finish`.

The backend calculates the average score for:

- Overall final score
- Confidence
- Communication
- Correctness

It marks the interview as `completed` and returns the report data. The report page displays overall performance, skill bars, a question-wise trend graph, each answer's feedback, and a downloadable PDF report.

### 8. Interview History

The History page calls `GET /api/interview/get-interviews`, which returns the authenticated user's interviews in newest-first order. Selecting an interview calls `GET /api/interview/report/:id` to show the saved report.

### 9. Credits and Payment Flow

Users begin with 100 credits. Starting an interview costs 50 credits.

For paid plans:

1. The user selects a plan.
2. The client calls `POST /api/payment/order`.
3. The backend creates a Razorpay order and saves a payment record with status `created`.
4. Razorpay Checkout opens in the browser.
5. After a successful payment, Razorpay returns order ID, payment ID, and signature.
6. The client sends these details to `POST /api/payment/verify`.
7. The backend generates the expected HMAC SHA-256 signature using `RAZORPAY_KEY_SECRET`.
8. It compares the expected signature with the received signature.
9. If valid, the payment is marked as `paid` and credits are added to the user account.

## Data Models

### User

```text
User
├── name
├── email (unique)
├── credits
├── createdAt
└── updatedAt
```

### Interview

```text
Interview
├── userID -> User
├── role
├── experience
├── mode (HR or Technical)
├── resumeText
├── questions[]
│   ├── question
│   ├── difficulty
│   ├── timeLimit
│   ├── answer
│   ├── feedback
│   ├── confidence
│   ├── communication
│   ├── correctness
│   └── score
├── finalScore
├── status
└── timestamps
```

### Payment

```text
Payment
├── userId -> User
├── planId
├── account
├── credits
├── razorpayOrderId
├── razorpayPaymentId
├── status
└── timestamps
```

## API Endpoints

| Method | Endpoint | Description | Authentication |
|---|---|---|---|
| POST | `/api/auth/google` | Create/find user and set JWT cookie | Public |
| GET | `/api/auth/logout` | Clear the authentication cookie | Public |
| GET | `/api/user/current-user` | Get current logged-in user | Required |
| POST | `/api/interview/resume` | Upload and analyse resume | Required |
| POST | `/api/interview/generate-questions` | Generate questions and create interview | Required |
| POST | `/api/interview/submit-answer` | Evaluate and save an answer | Required |
| POST | `/api/interview/finish` | Calculate interview result | Required |
| GET | `/api/interview/get-interviews` | Fetch interview history | Required |
| GET | `/api/interview/report/:id` | Fetch a detailed report | Required |
| POST | `/api/payment/order` | Create Razorpay payment order | Required |
| POST | `/api/payment/verify` | Verify payment and add credits | Required |

## Security Considerations

- JWT is stored in an HTTP-only cookie to reduce exposure to client-side scripts.
- Protected routes use authentication middleware to verify JWT signatures.
- CORS is configured to allow only known frontend origins with credentials.
- Razorpay signatures are verified on the server before credits are added.
- API keys and secrets are stored in environment variables.
- Resume uploads have a 5 MB size limit and are deleted after processing.

## Environment Variables

### Server

```env
PORT=8000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLIENT_URL=your_client_url
```

### Client

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_SERVER_URL=your_server_url
```

## Local Setup

```bash
# Terminal 1
cd "AI agent/server"
npm install
npm run dev

# Terminal 2
cd "AI agent/client"
npm install
npm run dev
```

The backend runs on port `8000` when configured through `.env`. Vite commonly runs the frontend on `http://localhost:5173`.

## Portfolio Description

**IntervAI** is an AI-powered mock interview platform built with React, Node.js, Express, MongoDB, Firebase, OpenRouter, and Razorpay. It analyses PDF resumes, generates personalised technical or HR interview questions, provides timed voice-enabled interview practice, evaluates answers using AI, generates visual performance reports, and supports secure credit purchases.

## Future Improvements

- Verify Firebase ID tokens on the server instead of trusting only client-sent profile details.
- Check interview ownership on every interview-specific endpoint.
- Validate AI JSON responses with a schema and retry malformed responses.
- Add truly adaptive follow-up questions based on previous answers.
- Add genuine speech analytics for voice confidence rather than text-based confidence estimation.
- Store production uploads in private cloud storage instead of the local server.
- Validate plan price and credit values only on the server.
- Add unit, integration, and end-to-end tests.
- Add rate limiting, retries, logging, and background queues for AI requests.

## Key Learnings

This project demonstrates full-stack application development, REST API design, authentication with JWT cookies, file upload and PDF parsing, AI prompt engineering, structured AI response handling, payment verification, database schema design, responsive UI development, and report generation.

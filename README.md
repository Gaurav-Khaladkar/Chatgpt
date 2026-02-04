# AI Online Exam Platform (React + Java)

This repo contains a starter implementation for an online exam and interview platform built with a React frontend and a Java (Spring Boot) backend. The focus is on **transparent, responsible AI assistance** with **human oversight** rather than hidden or automatic decisions.

## Features

- **Secure exam flow**: timed sections, autosave, question randomization, and audit logs.
- **AI integrity signals**: surface anomalies (e.g., rapid guessing) without auto-failing candidates.
- **Human-in-the-loop review**: evidence-based proctor dashboards and review workflows.
- **Interview studio**: structured interviews, rubrics, and AI-generated summaries.
- **Candidate experience**: mobile-friendly UI, accessibility modes, and clear instructions.
- **Enterprise controls**: role-based access, SSO-ready configuration, and data residency.
- **Privacy & compliance**: guidance for consent, data retention, and accessibility.

## Project layout

```
backend/   # Spring Boot REST API
frontend/  # React (Vite) client
```

## Getting started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
./gradlew bootRun
```

## API overview

- `GET /api/exams/overview` — summary metrics and guidance.
- `GET /api/exams/signals` — example integrity signals.
- `POST /api/exams/reviews` — submit a proctor review.

## Responsible AI notes

This starter is intentionally designed so that AI only **assists** reviewers. Any adverse decisions should be made by trained humans with clear evidence and an appeal process.

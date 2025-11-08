# Realtime Analytics Dashboard 

Quick start (Linux/macOS; adjust for Windows):

1. Copy `.env.example` to `.env` and tweak if necessary.
2. Start MongoDB: `docker-compose up -d`
3. Backend:
   - `cd backend`
   - `npm install`
   - `npm run start`
4. Frontend:
   - `cd frontend`
   - `npm install`
   - `npm run start`
5. Open the frontend (Vite default at http://localhost:5173) or open your browser to the backend host.
6. Run the load generator: `cd backend && node loadgen.js` or `npm run loadgen`

Note: this is a minimal local demo. For production readiness add JWT auth, TLS, and scalable persistence (Redis/Kafka).

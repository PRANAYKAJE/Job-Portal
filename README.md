# Job Portal (React + Node/Mongo)

Simple job portal example with a Vite + React frontend and Express + MongoDB backend.

**Overview**
- **Backend**: Express, Mongoose, authentication, file uploads.
- **Frontend**: Vite + React (hooks + Redux slices) UI.

**Prerequisites**
- Node.js 18+ installed.
- MongoDB Atlas account or local MongoDB instance.

**Quick Start**

- Backend

  1. Install dependencies and configure env:

```powershell
cd "c:\My_Project\React Projects\jobportal-yt-main\backend"
npm install
# Edit the environment file: [backend/.env](backend/.env)
```

  2. Start the backend (development):

```powershell
npm run dev
```

  3. (Optional) Seed the database with sample data:

```powershell
npm run seed
# Seed script: [backend/scripts/seed.js](backend/scripts/seed.js)
```

- Frontend

```powershell
cd "c:\My_Project\React Projects\jobportal-yt-main\frontend"
npm install
npm run dev
# Open http://localhost:5173/
```

**Environment Variables**
- Configure `[backend/.env](backend/.env)` with at least:
  - `MONGO_URI` — MongoDB connection string (Atlas SRV or local URI).
  - `CLOUD_NAME`, `API_KEY`, `API_SECRET` — Cloudinary credentials (optional for uploads).
  - `PORT` — backend port (defaults to 3000).

If using Atlas SRV and you see `querySrv ENOTFOUND`, either use the non-SRV connection string shown in `[backend/.env](backend/.env)` or use a local MongoDB URI `mongodb://127.0.0.1:27017/job-portal`.

**Add Custom Data**
- Use the seed script at [backend/scripts/seed.js](backend/scripts/seed.js) to create example `User`, `Company`, `Job`, and `Application` documents.
- Or POST to the backend API routes under the `backend/routes` folder (e.g., add users via `POST /api/v1/user`). See models in [backend/models](backend/models) for required fields.

**Troubleshooting**
- DNS/SRV errors connecting to Atlas: run `nslookup -type=SRV _mongodb._tcp.cluster0.mongodb.net` to validate DNS resolution or switch to non-SRV URI.
- `Browserslist: caniuse-lite is outdated` warning (frontend): run `npx update-browserslist-db@latest` in the `frontend` folder.
- Port conflicts: change `PORT` in `[backend/.env](backend/.env)` or stop the process using the port.

**Project Layout**
- `backend/` — server source, models, routes, utils, seed script.
- `frontend/` — Vite React app and UI components.

**Contributing**
- Open an issue or PR with a clear description and reproduction steps.

**License**
- MIT

import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config({ path: ".env.development.local" });

const app = express();
const PORT = process.env.BACKEND_PORT;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

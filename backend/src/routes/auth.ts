import { Router } from "express";
import { AuthController } from "@/controllers/authController";

const router = Router();

const authController = new AuthController();

// GET /auth/strava/callback
router.get("/strava/callback", (req, res, next) =>
  authController.handleCallback(req, res, next)
);

export default router;

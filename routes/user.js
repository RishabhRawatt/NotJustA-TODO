import express from "express";
import {
  registerNewUser,
  login,
  getMyProfile,
  logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.post("/new", registerNewUser);
router.post("/login", login);
router.get("/logout", logout);

router.get("/me",isAuthenticated,getMyProfile);

export default router;

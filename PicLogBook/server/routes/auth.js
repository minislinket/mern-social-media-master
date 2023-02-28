//import express
import express from "express";
// import login controller
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);

export default router;

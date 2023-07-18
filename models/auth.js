import express from "express";
import { login, register } from "../controllers/auth.js";


// de esta manera se crean las rutas que se necesitaran para el aplicativo
const router = express.Router();


router.post("/register",register)
router.post("/login",login)

export default router;
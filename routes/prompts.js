import express from "express";
import {
    updatePrompt,
    getPrompt,
    deletePrompt,
    getPrompts,
    createPrompt
} from "../controllers/prompts.js";
const router =  express.Router();

router.post("/",createPrompt)
// IT IS CALLED THE FUNCTION UPDATE OF CONTROLLER
router.put("/:id", updatePrompt)
// IT IS CALLED THE FUNCTION DELETE OF CONTROLLER
router.delete("/:id", deletePrompt)
// IT IS CALLED THE FUNCTION GET OF CONTROLLER
router.get("/:id", getPrompt)
// IT IS CALLED THE FUNCTION GET ALL OF CONTROLLER
router.get("/"  ,getPrompts)
export default router;
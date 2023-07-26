import express from "express";
import {
    updatePrompt,
    getPrompt,
    deletePrompt,    
    createPrompt,
    getPromptsByUser
} from "../controllers/prompts.js";
import { verifyUser } from "../utils/verifyToken.js"; 
const router =  express.Router();

router.post("/",verifyUser,createPrompt)
// IT IS CALLED THE FUNCTION UPDATE OF CONTROLLER
router.put("/:id",verifyUser, updatePrompt)
// IT IS CALLED THE FUNCTION DELETE OF CONTROLLER
router.delete("/:id",verifyUser, deletePrompt)
// IT IS CALLED THE FUNCTION GET OF CONTROLLER
router.get("/",verifyUser,getPrompt)

router.get("/:iduser",verifyUser,getPromptsByUser)
export default router;
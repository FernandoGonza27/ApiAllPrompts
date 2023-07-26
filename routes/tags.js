import express from "express";
import {
    updateTag,
    getTag,
    deleteTag,    
    createTag    
} from "../controllers/tag.js";
import { verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

// IT IS CALLED THE FUNCTION CREATE OF CONTROLLER
router.post("/",verifyUser,createTag)
// IT IS CALLED THE FUNCTION UPDATE OF CONTROLLER
router.put("/:id",verifyUser, updateTag)
// IT IS CALLED THE FUNCTION DELETE OF CONTROLLER
router.delete("/:id",verifyUser, deleteTag)
// IT IS CALLED THE FUNCTION GET OF CONTROLLER
router.get("/", verifyUser,getTag)
// IT IS CALLED THE FUNCTION GET ALL OF CONTROLLER



export default router;
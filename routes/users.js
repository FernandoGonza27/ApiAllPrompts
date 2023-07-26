import express from "express";
import {
    updateUser,
    getUser,
    deleteUser,
    getUsers,
    createUser
} from "../controllers/user.js";
import { verifyAdmin, verifyUser} from "../utils/verifyToken.js";
const router = express.Router();

// IT IS CALLED THE FUNCTION CREATE OF CONTROLLER
router.post("/",verifyAdmin,createUser)
// IT IS CALLED THE FUNCTION UPDATE OF CONTROLLER
router.put("/:id",verifyAdmin, updateUser)
// IT IS CALLED THE FUNCTION DELETE OF CONTROLLER
router.delete("/:id",verifyAdmin, deleteUser)
// IT IS CALLED THE FUNCTION GET OF CONTROLLER
router.get("/:id",verifyAdmin, getUser)
// IT IS CALLED THE FUNCTION GET ALL OF CONTROLLER
router.get("/",verifyAdmin,getUsers)


export default router;
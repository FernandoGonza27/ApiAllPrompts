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
router.post("/",createUser)
// IT IS CALLED THE FUNCTION UPDATE OF CONTROLLER
router.put("/:id", updateUser)
// IT IS CALLED THE FUNCTION DELETE OF CONTROLLER
router.delete("/:id", deleteUser)
// IT IS CALLED THE FUNCTION GET OF CONTROLLER
router.get("/:id", getUser)
// IT IS CALLED THE FUNCTION GET ALL OF CONTROLLER
router.get("/",getUsers)


export default router;
import express from "express";
import {
    updateUser,
    getUser,
    deleteUser,
    getUsers,
    createUser
} from "../controllers/user.js";
import { verifyAdmin, verifyUser} from "../utils/verifyToken.js";

router.put("/:id",verifyUser, updateUser)
//DELETE\
router.delete("/:id",verifyUser, deleteUser)
//GET
router.get("/:id",verifyUser, getUser)

router.get("/",verifyAdmin,getUsers)


export default router;
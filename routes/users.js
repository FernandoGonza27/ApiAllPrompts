import express from "express";
import {
    updateUser,
    getUser,
    deleteUser,
    getUsers,
    createUser
} from "../controllers/user.js";

const router =  express.Router();
//CREATE
router.post("/", createUser)
//update
router.put("/:id", updateUser)
//DELETE\
router.delete("/:id", deleteUser)
//GET
router.get("/:id", getUser)

router.get("/",getUsers)


export default router;
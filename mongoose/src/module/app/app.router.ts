import  express  from "express";
import { createUser, getMarriedUsers, getOneUserContact } from "./app.controller";
import { getUsers } from "./app.controller";

const router = express.Router();
router.get("/", getUsers);
router.post("/user", createUser)
router.get("/users", getMarriedUsers)
router.get("/user/:id", getOneUserContact)
export default router;
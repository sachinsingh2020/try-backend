import express from 'express';
import { deleteUser, getAllUsers, getUser, newUser } from '../controllers/user.js';
import { adminOnly } from '../middlewares/auth.js';
const app = express.Router();
app.post("/new", newUser);
app.get("/all", adminOnly, getAllUsers);
app.route("/:id").get(getUser).delete(deleteUser);
export default app;

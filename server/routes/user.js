import express from 'express'
const router = express.Router();
import { testServer, getUser, createUser } from "../controllers/userController.js";

router.get('/', testServer)
router.get('/user', getUser)
router.post('/user', createUser)

export default router;
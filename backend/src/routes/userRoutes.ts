import express from 'express';
import {signUpController} from "../controllers/userControllers"
import {loginController} from "../controllers/userControllers"
import { createTaskController, deleteTaskbyIDController, getTasksbyIDController } from '../controllers/taskController';
const router=express.Router();


router.post('/signup',signUpController);
router.post('/login',loginController);


export default router;
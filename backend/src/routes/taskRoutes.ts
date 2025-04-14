import express from 'express';
import { createTaskController, deleteTaskbyIDController, getTasksbyIDController,updateTaskController } from '../controllers/taskController';
import { ensureAuthenticate } from '../Auth/Auth';
const router=express.Router();

router.post('/createTask',ensureAuthenticate,createTaskController);
router.post('/deleteTask',ensureAuthenticate,deleteTaskbyIDController);
router.post('/getTask',ensureAuthenticate,getTasksbyIDController);
router.post('/updateTask',ensureAuthenticate,updateTaskController);

export default router;
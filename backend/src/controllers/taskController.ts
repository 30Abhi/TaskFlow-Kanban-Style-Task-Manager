import express, { RequestHandler } from "express";
import { createTaskService, deleteTaskService, getTasksbyIdService ,updateTaskService} from "../service/taskService";

export const createTaskController:RequestHandler=async(req,res):Promise<any>=>{
    try {
        const{title,createdBy ,status}=req.body;

        console.log("Authenticated user------>",req.user);

        const task=await createTaskService(title,status,createdBy);
        
        console.log("Task Created",task);
        
        return res.status(200).json({
            message:"task created success",
            task:task,

        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Error in Create Task",
            error: error.message || error,
        });
    }
}

export const getTasksbyIDController:RequestHandler=async(req:express.Request,res:express.Response):Promise<any>=>{
    try {
        const{createdBy }=req.body;

        const tasks=await getTasksbyIdService(createdBy);
        
        return res.status(200).json({
            message:"All tasks created by users are",
            tasks:tasks,

        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Error in getting all task",
            error: error.message || error,
        });
    }
}
export const deleteTaskbyIDController:RequestHandler=async(req:express.Request,res:express.Response):Promise<any>=>{
    try {
        const{taskID }=req.body;

        const task=await deleteTaskService(taskID);
        console.log("task deleted successfully ",task);
        return res.status(200).json({
            message:"Task deleted successfully ",
            task:task,

        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Error in deleting task",
            error: error.message || error,
        });
    }
}
export const updateTaskController:RequestHandler=async(req:express.Request,res:express.Response):Promise<any>=>{
    try {
        const{taskID,currentStatus }=req.body;

        const task=await updateTaskService(taskID,currentStatus);
        console.log("task updated successfully ",task);
        return res.status(200).json({
            message:"Task updated successfully ",
            task:task,

        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message: "Error in updating task",
            error: error.message || error,
        });
    }
}
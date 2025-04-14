import Task from "../Scehma/Task";
import mongoose from "mongoose";

export const getTasksbyIdService=async (userID:mongoose.Schema.Types.ObjectId)=>{
    try {
        const tasks = await Task.find({ createdBy: userID });
        return tasks;
    } catch (error) {
        console.error("Error fetching tasks by user ID:", error);
        throw error;
    }
}

export const createTaskService=async (title:string,status:string,userID:mongoose.Schema.Types.ObjectId)=>{
    try {
        const response = await Task.create({ 
            title,
            createdBy: userID ,
            status,
        
        });
        return response;
    } catch (error) {
        console.error("Error in creating task", error);
        throw error;
    }
}

export const deleteTaskService=async(taskId:mongoose.Schema.Types.ObjectId)=>{
    try {
        const response=await Task.findByIdAndDelete(taskId);

        
        if (!response) {
            throw new Error("Task not found or already deleted");
        }

        return response;
    } catch (error) {
        console.error("Error in deleting task", error);
        throw error;
    }
}
export const updateTaskService=async(taskId:mongoose.Schema.Types.ObjectId,currentStatus:string)=>{
    try {

        const response=await Task.findByIdAndUpdate(
            taskId,
            {status:currentStatus},
            {new:true}
        );

        if (!response) {
            throw new Error("Task not found for update ");
        }

        return response;
    } catch (error) {
        console.error("Error in upddating task", error);
        throw error;
    }
}
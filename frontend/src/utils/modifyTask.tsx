import { axiosInstance } from "./axiosINstance"

export const modifyTask=async (id:string,currentStatus:string,authToken:string)=>{
    const updateInfo={
        "taskID":id,
        "currentStatus":currentStatus
    }
    const response=await axiosInstance.post(
        "/task/updateTask",
        updateInfo,
        {
            headers: {
              authenticate: authToken || "", // Ensure authToken is not undefined
              "Content-Type": "application/json", // Specify content type
            },
        }

    );
    console.log("Task Upadated success ",response)
}

export const createTask=async (userID:string,status:string,title:string,authToken:string)=>{

    const Info={
        title:title,
        createdBy:userID,
        status:status
    }
    
    const response=await axiosInstance.post(
        "/task/createTask",
        Info, // Pass the body here
      {
        headers: {
          authenticate: authToken || "", // Ensure authToken is not undefined
          "Content-Type": "application/json", // Specify content type
        },
      }
    );
    console.log("Task Created success ",response)
}
export const getTask=async (userID:string,authToken:string)=>{
    const userInfo={
        createdBy:userID,
      }
      const response = await axiosInstance.post(
        "/task/getTask",
        userInfo, // Pass the body here
        {
          headers: {
            authenticate: authToken || "", // Ensure authToken is not undefined
            "Content-Type": "application/json", // Specify content type
          },
        }
      );
      console.log("Response data:", response.data);
         // @ts-ignore
      const tasks = response.data.tasks;
       // @ts-ignore
       const todoTasks = tasks
       .filter((task: any) => task.status === "todo")
       .map((task: any) => ({
         title: task.title,
         id: task._id,
       }));
     // @ts-ignore
     const ongoingTasks = tasks
       .filter((task: any) => task.status === "ongoing")
       .map((task: any) => ({
         title: task.title,
         id: task._id,
       }));
     // @ts-ignore
     const completedTasks = tasks
       .filter((task: any) => task.status === "completed")
       .map((task: any) => ({
         title: task.title,
         id: task._id,
       }));

       return {
        todoTasks:todoTasks,
        ongoingTasks:ongoingTasks,
        completedTasks:completedTasks
       }
}


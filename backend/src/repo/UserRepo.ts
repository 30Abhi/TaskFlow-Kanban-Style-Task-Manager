import User from "../Scehma/User"

export const getUsers=async()=>{
    try {
        const users=await User.find();
        return users;
    } catch (error) {
        console.log(error);
    }
}
export const getUserbyEmail=async(email:string)=>{
    try {
        const user=await User.findOne({email});
        return user;
    } catch (error) {
        console.log(error);
    }
}


export const createUser=async(values:Record<string,any>)=>{
    try {
        
       const user= await User.create(values);
       return user;
    } catch (error) {
        console.log(error);
    }
}

export const updateUser=async(id:string,values:Record<string,any>)=>{
    try {
        const user=await User.findByIdAndUpdate(id,values);
        return user;
    } catch (error) {
        console.log(error);
    }
}   








import mongoose from "mongoose";


 const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true,
    },

    password:{
        type:String,
        require:true,

    },

    salt:{
        type:String,
        
    },

    sessionTokken:{
        type:String,
    }



},{timestamps:true})


 const User=mongoose.model('User',UserSchema);
export default User;

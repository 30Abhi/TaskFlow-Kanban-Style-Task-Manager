import {getUserbyEmail} from "../repo/UserRepo" 
import {authentication, random} from "../utils/encryptor"
import {createUser} from "../repo/UserRepo"
export const signUpService=async (email:string,username:string,password:string)=>{
    const existinguser:any=await getUserbyEmail(email);

    if(existinguser){
        throw new Error("User with this email already exists");
    }
    
    const salt:string=random();

    const user=await createUser({
        
        email,
        username,
        password:authentication(salt,password),
        salt:salt,

    })

    return user;

}
export const loginService=async (email:string,password:string)=>{
    const existinguser:any=await getUserbyEmail(email);

    if(!existinguser){
        throw {
            message:'User doesnot exist',
            status:400,
        }
    }

    console.log("USER IS PRESENT",existinguser);
    const userpassword=authentication(existinguser.salt,password);

    if(userpassword===existinguser.password){
        
        return existinguser;
    }

    else{
        throw new Error("User doesnot exist ");
    }


}



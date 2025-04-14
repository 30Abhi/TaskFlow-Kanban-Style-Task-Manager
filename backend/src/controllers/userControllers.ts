import express, { Request, RequestHandler, Response } from 'express';

import {signUpService} from '../service/userService';

import {loginService} from '../service/userService';
import jwt from 'jsonwebtoken';
import { JWTSECRET } from '../config/serverConfig';


export const signUpController :RequestHandler = async (req: Request, res: Response): Promise<any>  => {
    try {
        console.log("Signup INitiated")
        const { email, username, password } = req.body;

        const user:any=await signUpService(email, username, password);
        
        console.log("user :=>",user);
         return res.status(201).json({ 
            message: "User signed up successfully !", 
            user:user,
            success: true 
        });

    } catch (error) {  // Add `any` type for `error` to prevent unknown property access issues
        console.log(error);

        if (error.status) {
             return res.status(error.status).json({
                message: error.message,
                success: false,
            });
        }

         return res.status(400).json({
            message: "Error in signup",
            error: error.message || error,
        });
    }
};
export const loginController :RequestHandler = async (req: Request, res: Response): Promise<any>  => {
    try {
        console.log("login INitiated")
        const { email, password } = req.body;

        const user:any=await loginService(email, password);

        const jwtSecret=JWTSECRET;

        const jwttoken=jwt.sign(
            {_id:user._id,email:user.email},
            jwtSecret,
            {expiresIn:'2h'}
        )

        console.log("user :=>",user);
         return res.status(201).json({ 
            message: "User login successfully! ", 
            user:user,
            success: true ,
            jwtToken:jwttoken,
        });

    } catch (error) {  // Add `any` type for `error` to prevent unknown property access issues
        console.log(error);

        if (error.status) {
             return res.status(error.status).json({
                message: error.message,
                success: false,
            });
        }

         return res.status(400).json({
            message: "Error in Login",
            error: error.message || error,
        });
    }
};



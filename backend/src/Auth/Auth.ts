import jwt from "jsonwebtoken";
import express, { RequestHandler } from "express";
import { JWTSECRET } from "../config/serverConfig";
export const ensureAuthenticate:RequestHandler=(req:express.Request,res:express.Response,next:express.NextFunction):any=>{
    try {
        const auth=req.headers['authenticate'];
        if(!auth){
            return res.status(400).json({
                message:"User Not Authenticated"
            })
        }

        const decoded=jwt.verify(auth.toString(),JWTSECRET);
  
        req.user=decoded;

        next();

    } catch (error) {
        console.log(error);
        return res.status(400).json({
            message:"Unauthorized User or Expired Token",
            error:error,
        })
    }
}

import crypto from "crypto";
import {secret} from "../config/serverConfig"

export const random=()=>{
    return crypto.randomBytes(128).toString('base64');
}

const SECRET=secret;

export const authentication=(salt:string,password:string)=>{
    return crypto.createHmac('sha256',[salt,password].join('/')).update(SECRET).digest('hex');
}
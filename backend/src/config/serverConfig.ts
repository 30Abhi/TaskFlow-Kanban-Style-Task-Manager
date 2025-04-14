import dotenv from 'dotenv';

dotenv.config();

export const PORT:number=Number(process.env.PORT);

export const secret:string=process.env.SECRET;

export const JWTSECRET=process.env.JWTSECRET;
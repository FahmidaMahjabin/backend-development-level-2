import { NextFunction, Request, Response } from "express";
import { createUserToDB, getOneUserContactFromDB, getUsersFromDB } from "./app.service";
import User from "./app.model";

export const createUser = async(req:Request, res:Response, next: NextFunction) => {
    const data = req.body;
    console.log("data from controller:", data)
    const user =await createUserToDB(data);
    console.log("User:", user);
    res.status(200).json({
        status:"success",
        data: user
    })
    
    next();
}
export const getUsers = async (req:Request, res:Response, next:NextFunction) =>{
    const user = await getUsersFromDB();
    res.status(200).json(
        {
            status:"success",
            data: user,
        }
    )
}
export const getOneUserContact = async (req:Request, res: Response, next:NextFunction) =>{
    const {id} = req.params;
    console.log("id:", id)
    const user = await getOneUserContactFromDB(id);
    res.status(200).json(
        {
            status: "success",
            data:user
        }
    )

}
export const getMarriedUsers = async (req:Request, res: Response, next:NextFunction) =>{
    const user = await User.getMarriedUsers();
    res.status(200).json(
        {
            status: "success",
            data:user
        }
    )

}
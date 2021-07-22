import UserModel from "../models/user.model.js";
import { createUser, getUsers } from "../services/user.services.js";
import { ErrorResponse } from "../utils/helpers.js";

export async function httpCreateUser(req,res){
    
    const { fullName } = req.body;
    if (!req.file.path || !fullName) throw new ErrorResponse("bad request", 400);      
    const user = {
        fullName,
        avatar: req.file.path
    }
    return res.status(200).json(await createUser(user));
    
}

export async function httpGetUsers(_,res){
    return res.json(await getUsers());
}


export async function httpDeleteAllUsers(_,res){
    await UserModel.deleteMany();
    res.status(204).json();
}
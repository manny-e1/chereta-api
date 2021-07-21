import UserModel from "../models/user.model.js";


export async function createUser(user){
    return UserModel.create({  
        ...user
    });
}

export async function getUsers(){
    return UserModel
        .find()
        .select('_id fullName avatar')
}
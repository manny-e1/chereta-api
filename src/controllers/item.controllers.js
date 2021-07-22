import ItemModel from "../models/item.model.js";
import { createItem, getItems } from "../services/item.services.js";
import { ErrorResponse } from "../utils/helpers.js";


export async function httpCreateItem(req,res){
   
        const { owner, title, description, catagory } = req.body;
        const deadline = new Date(Date.UTC(...req.body.deadline.split(",")));
        console.log(deadline);

        if (isNaN(deadline))
            throw new ErrorResponse("invalid deadline date", 400);

        if (
            !owner ||
            !title ||
            !description ||
            !deadline ||
            !catagory ||
            !req.file.path
        ) throw new ErrorResponse("bad request", 400);

        const item = {
            owner,
            title,
            description,
            catagory,
            deadline,
            coverImage: req.file.path,
        }

        return res.status(201).json(await createItem(item)); 
    
}

export async function httpGetItems(_,res){
    return res.json(await getItems());
}

export async function httpDeleteAllItems(_,res){
    await ItemModel.deleteMany();
    res.status(204).json();
}

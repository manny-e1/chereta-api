import ItemModel from "../models/item.model.js";


export async function createItem(item){
    return ItemModel.create({  
        ...item
    });
}

export async function getItems(){
    return ItemModel
            .find()
            .select('_id owner title description deadline coverImage')
            .populate('owner', 'fullName avatar')
}
import ItemModel from "../models/item.model.js";


export async function createItem(item){
    return ItemModel.create({  
        ...item
    });
}

export async function getItems(){
const id = "60f900ef8cc96b241d0c3705";
    return ItemModel
            .findById(id)
            .select('_id owner title description deadline coverImage')
            .populate('owner', 'fullName avatar')
}

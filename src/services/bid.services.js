import BidModel from "../models/bid.model.js";

export async function createBid(body){
    return BidModel.create({  
        ...body
    });
}

export async function getBids(){
    return BidModel
            .find()
            .select('_id bidder amount item')
            .populate('item','title')
}

export async function highestBid(){
    return BidModel
            .findOne({"item":"60f900ef8cc96b241d0c3705"})
            .sort({"amount":-1})
            .limit(1)
            .populate('bidder')
            .populate('item');
}


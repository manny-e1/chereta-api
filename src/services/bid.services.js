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
            .find()
            .sort({"amount":-1})
            .limit(1)
            .populate('bidder')
            .populate('item');
}


import { createBid, getBids, highestBid } from "../services/bid.services.js";
import { ErrorResponse } from "../utils/helpers.js";



export async function httpCreateBid(req,res){ 
        const { amount, item, name} = req.body;
        if(!amount || !name || !req.file.path || !item) 
            throw new ErrorResponse("bad request",400);
        const bidData = {
            amount: parseInt(amount),
            item,
            bidder: {
                name,
                avatar: req.file.path
            }
        }
        return res.status(201).json(await createBid(bidData));
}

export async function httpGetBids(_,res){
    return res.json(getBids());
}

export async function httpGetHighestBid(_,res){
    return res.json(await highestBid());
}



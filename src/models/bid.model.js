import mongoose from 'mongoose'
const bidSchema = mongoose.Schema({
    bidder: {
        name: String,
        avatar: String
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

const BidModel = mongoose.model('Bid', bidSchema)

export default BidModel
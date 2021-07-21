import mongoose from 'mongoose'
const itemSchema = mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    catagory: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
})

const ItemModel = mongoose.model('Item', itemSchema)

export default ItemModel
import mongoose from 'mongoose'
const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
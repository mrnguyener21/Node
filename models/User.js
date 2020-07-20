import mongoose from 'mongoose'

//schema coming from mongoose is the structure of how all elements from that type should look like
//ex: name: String means that there will be a name and it will be a string rather than the actual name

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: Number,
    address: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema);

export default User;

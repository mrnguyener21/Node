import mongoose from 'mongoose'

//schema coming from mongoose is the structure of how all elements from that type should look like
//ex: name: String means that there will be a name and it will be a string rather than the actual name
// const kittySchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });

// const Kitten = mongoose.model('Kitten',kittySchema);

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: String,
    age: Number
})

const User = mongoose.model('User', userSchema);

export default User;
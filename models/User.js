import mongoose from 'mongoose'

//schema coming from mongoose is the structure of how all elements from that type should look like
//ex: name: String means that there will be a name and it will be a string rather than the actual name
//schema = blueprint => model (based on the schema)
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
    address: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Address'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema);

export default User;

// refs (reference, relation) is used to connect two different types of documents in the database 

// You can store one or many IDs for the referenced collection in the field,
// thus creating one-to-one or one-to-many "relationships".

// So, to store a single ID for a referenced collection, the syntax would be:

// client: {type: Mongoose.Schema.Types.ObjectId, ref: 'Client'}  //No arrays, as we want to store a single ID only.

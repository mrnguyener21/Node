import mongoose from 'mongoose'

const addressScheme = mongoose.Schema({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    }
});

const address = mongoose.model('Address', addressScheme);

export default address;
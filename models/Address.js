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

const Address = mongoose.model('Address', addressScheme);

export default Address;
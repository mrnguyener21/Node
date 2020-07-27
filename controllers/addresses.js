import Address from '../models/Address.js';
import User from '../models/User.js';

export const getAddresses = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// path/:userId
export const createAddress = async (req, res) => {
    const { street, city } = req.body;
    const { userId } = req.params;
    
    const createdAddress = new Address({ street, city });

    try {
        const user = await User.findById(req.params.id);

        await createdAddress.save();

        res.status(201).json({ message: 'Address successfully created.' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
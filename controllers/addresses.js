import Address from '../models/Address.js';
import User from '../models/User.js';

export const getAddresses = async (req, res) => {
    try {
        // find all addresses in the addresses collection
        // the process is exactly the same as finding users.
        // My Question: would there be anything populate since the data is already shown versus with the users we needed it because we wanted to show the data for addresses rather than the id representing it
        const addresses = await Address.find().populate();
        console.log(addresses);
        res.send(addresses);
    } catch (error) {
        res.send(error.message);
    }
}

export const createAddress = async (req, res) => {
    const { street, city } = req.body;
    const { userId } = req.params;
    
    const createdAddress = new Address({ street, city });

    try {
        const user = await User.findById(userId);
        const updatedUser = await User.findByIdAndUpdate(userId, { address: createdAddress._id } );

        await createdAddress.save();

        res.status(201).json({ message: 'Address successfully created.' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


        // const users = await User.findOne({ username: 'adrian' }).populate('address');

        // console.log(users);

        // const users = await User.find().populate('address');
            // console.log(users);

            // Functionality for existing users to add addresses to their problems.
        // res.send(users);
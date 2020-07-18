import { v4 as uuid } from 'uuid';
let users = [];
import User from '../models/User.js';

export const getUsers = async (req, res) => {
    const users = await User.find();

    res.send(users);
}

export const createUser = async (req, res) => {   
    const { username, password, age } = req.body;
    
    const createdUser = new User({ username, password, age });

    try {
        await createdUser.save();

        res.status(201).json({ message: 'User successfully created.' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => { 
    console.log(`user with id ${req.params.id} has been deleted`);
    
    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.username = req.body.username;
    user.age = req.body.age;

    console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
};

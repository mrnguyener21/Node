import express from 'express';
import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// Set up the "morgan" middleware
// Create a middleware function that checks whether a post request submitting the user has all the fields set up.

//username: victor
//password: 123
//birthday: 
//enter

const logTime = (req, res, next) => {
    console.log('Time:', Date.now());

    next();
}

router.use(logTime);

// READ/GET all users
router.get('/', getUsers);

// CREATE/POST a new user
router.post('/', createUser);

// READ/GET an individual user
router.get('/:id', getUser)

// DELETE/DELETE an individual user
router.delete('/:id', deleteUser);

// UPDATE/PATCH an individual user
router.patch('/:id', updateUser);

export default router;
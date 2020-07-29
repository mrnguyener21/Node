
import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// READ/GET all users
router.get('/', getUsers);

// CREATE/POST a new user
router.post('/', createUser);

// READ/GET an individual user
router.get('/:id', getUser);

// DELETE/DELETE an individual user
router.delete('/:id', deleteUser);

// UPDATE/PATCH an individual user
router.patch('/:id', updateUser);

export default router;
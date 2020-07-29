import express from 'express';
import { getAddresses, createAddress } from '../controllers/addresses.js'

const router = express.Router();

router.get('/', getAddresses);

router.post('/:userId', createAddress);

// http://localhost:5000/address/5f12ff0cff05565084716abc

export default router;
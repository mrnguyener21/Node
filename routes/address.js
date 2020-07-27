import express from 'express';
import { getAddresses, createAddress } from '../controllers/addresses.js'

const router = express.Router();

router.get('/', getAddresses);

router.post('/:userId', createAddress);

export default router;
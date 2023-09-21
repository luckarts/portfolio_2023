import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { getTags } from './controllers';
const router = express.Router();

router.get('/get/all', asyncHandler(getTags));

export default router;

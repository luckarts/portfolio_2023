import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { getProfile, updateUserProfile, CreateUserProfile } from './controllers';
import { uploadPDF } from '../../helpers/multer/upload';
const router = express.Router();
router.get('/', asyncHandler(getProfile));
//router.get('/create', asyncHandler(CreateUserProfile));
router.put('/:id', uploadPDF, asyncHandler(updateUserProfile));

export default router;

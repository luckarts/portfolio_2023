import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { getTranslationsCommons } from './controller';
import { jwtDecode } from '../../helpers/jwtDecode';

const router = express.Router();

router.get('/commons', asyncHandler(getTranslationsCommons));
router.use(jwtDecode);

export default router;

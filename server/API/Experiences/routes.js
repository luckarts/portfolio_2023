import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { getListExperiences, getExperiencesByName } from './controller';
import { jwtDecode } from '../../helpers/jwtDecode';
import {
  create_Experiences_Details,
  create_List_Experiences,
  createAll_Experiences,
  update_Experience
} from './controller';
const router = express.Router();

router.get('/get/all', asyncHandler(getListExperiences));
router.get('/get/:company', asyncHandler(getExperiencesByName));
router.use(jwtDecode);
router.post('/post/experienceDetail', asyncHandler(create_Experiences_Details));
router.post('/post/listexperience', asyncHandler(create_List_Experiences));
router.post('/post/experience', asyncHandler(createAll_Experiences));
router.post('/post/allexperience', asyncHandler(createAll_Experiences));
router.put('/update/:id', asyncHandler(update_Experience));

export default router;

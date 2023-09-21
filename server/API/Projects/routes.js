import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import {
  getAllProjects,
  getAllTags,
  getProjectByName,
  getProjectsByTag,
  create_Project,
  update_Project,
  getProjectsById
} from './controllers';
import { upload } from '../../helpers/multer/upload';
const router = express.Router();
import { jwtDecode } from '../../helpers/jwtDecode';
//router.get('/get/', asyncHandler(getAllTags));

router.get('/get/all', asyncHandler(getAllProjects));
router.get('/get/by-tag/:tag', asyncHandler(getProjectsByTag));
router.get('/get/by-id/:id', asyncHandler(getProjectsById));

router.get('/get/by-name/:ProjectName', asyncHandler(getProjectByName));
router.use(jwtDecode);
router.post('/post', upload, asyncHandler(create_Project));
router.put('/update/:id', upload, asyncHandler(update_Project));

export default router;

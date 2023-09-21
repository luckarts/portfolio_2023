import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { getGallery, createGallery, getGalleryByTag } from './controllers';
import { upload } from '../../helpers/multer/upload';
import resize from '../../helpers/thumbnails';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'welcome on Project api' });
});
router.get('/get/gallery', asyncHandler(getGallery));
router.get('/get/gallery/:tag', asyncHandler(getGalleryByTag));
router.post('/post/gallery', upload, asyncHandler(createGallery));

export default router;

import { get_Gallery, create_Gallery, get_GalleryByTag } from '../../Services/Gallery/gallery_Db';

export async function getGallery(req, res) {
  const gallery = await get_Gallery();
  if (gallery) {
    return res.status(200).json({ gallery });
  } else return null;
}
export async function getGalleryByTag(req, res) {
  const tag = req.params.tag;
  const gallery = await get_GalleryByTag(tag);
  if (gallery) {
    return res.status(200).json({ gallery });
  } else return null;
}

export async function createGallery(req, res) {
  const { category, link } = req.body;
  let image = req.file;

  if (req.file) image = req.file.filename;

  const gallery = await create_Gallery({ image, category, link });
  if (gallery) {
    return res.status(200).json({ gallery });
  } else return null;
}

import db from '../../Database/models';
import { Op } from 'sequelize';

export async function get_Gallery() {
  const gallery = db.Gallery.findAll();
  if (gallery) return gallery;
  return null;
}

export async function get_GalleryByTag(tag) {
  const gallery = db.Gallery.findAll({
    where: {
      [Op.or]: [
        {
          category: {
            [Op.like]: `%${tag}%`
          }
        }
      ]
    }
  });

  if (gallery) {
    return gallery;
  }
  return null;
}
export async function create_Gallery({ image, category, link }) {
  const gallery = db.Gallery.create({
    image: image,
    category: category,
    link: link
  });
  if (gallery) return gallery;
  return null;
}

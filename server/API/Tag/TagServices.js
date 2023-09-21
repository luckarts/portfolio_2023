import db from '../../Database/models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;
export async function getTagDB() {
  const tags = db.Tag.findAll();
  if (tags) {
    return tags;
  }

  return null;
}

export async function createTagFromDB(name) {
  if (!name) {
    throw new Error('invalid argument name');
  }

  const tag = await db.Tag.create({
    name: name
  });

  return tag;
}
export async function updateTagDB(name, id) {
  const tag = await db.Experience.update(
    {
      name
    },
    { where: { id: id } }
  );
  if (tag) return tag;
  return null;
}

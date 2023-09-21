import db from '../../Database/models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;
export async function getUserProfileFromDB() {
  const userprofile = db.UserProfile.findAll();

  if (userprofile) {
    return userprofile;
  }

  return null;
}

/**
 * @param mixed date
 * @param mixed job
 * @param mixed year
 * @param mixed company
 * @param mixed link
 *
 * @return [type]
 */
export async function createUserprofileFromDB() {
  return await db.UserProfile.create();
}

export async function updateUserProfileFromDB(id, description, cv) {
  const userprofile = await db.UserProfile.update(
    {
      description: description,
      cv: cv
    },
    { where: { id: id } }
  );
  if (userprofile) return userprofile;
  return null;
}
export async function updateExperiencesDetails(id, imgProfile, description, cv) {
  const userprofile = await db.UserProfile.update(
    {
      imgProfile: imgProfile,
      description: description,
      cv: cv
    },
    { where: { id: id } }
  );
  if (userprofile) return userprofile;
  return null;
}

import { getUserProfileFromDB, updateUserProfileFromDB } from './UserProfileServices';

export async function getProfile(req, res) {
  const userProfile = await getUserProfileFromDB();
  if (userProfile) {
    return res.status(200).json({ userProfile });
  } else return null;
}

export async function updateUserProfile(req, res) {
  let cv = req.file;
  const id = req.params.id;
  const { description } = req.body;
  if (req.file) cv = req.file.originalname;
  const userProfile = await updateUserProfileFromDB(id, description, cv);

  if (userProfile) {
    return res.status(200).json({ userProfile });
  } else return null;
}

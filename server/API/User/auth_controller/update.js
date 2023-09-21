import { updatUser, get_User } from './User_DB';

export async function update(req, res, next) {
  let cv = req.file;
  const id = req.params.id;
  const { description } = req.body;

  if (cv) cv = req.file.originalname;

  const user = await updatUser(description, cv);
  if (user) return res.status(200).json({ message: 'User has been update' });

  return null;
}
export async function getUser(req, res, next) {
  const user = await get_User();
  if (user) return res.status(200).json({ user });

  return null;
}

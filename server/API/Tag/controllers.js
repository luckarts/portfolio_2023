import { updateTagDB, getTagDB, createTagFromDB } from './TagServices';

export async function getTags(req, res) {
  const tags = await getTagDB();
  if (tags) {
    return res.status(200).json({ tags });
  } else return null;
}

export async function createTag(req, res) {
  const { name } = req.body;

  const tag = await createTagFromDB({ name });
  if (tag) {
    return res.status(200).json({ tag });
  } else return null;
}
export async function updateTag(req, res) {
  const { tag } = req.body;

  const tagUpdated = await updateTagDB({ tag });
  if (tagUpdated) return res.status(200).json({ message: 'Project has been update' });

  return null;
}

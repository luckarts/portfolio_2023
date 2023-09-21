import {
  get_AllProjects,
  get_ProjectByname,
  get_AllTechnos,
  get_ProjectsByTag,
  createProject,
  updatProject,
  getProjectsByIdFromBdd,
  get_AllTags
} from './ProjectServices';

export async function getAllProjects(req, res) {
  const projects = await get_AllProjects();
  if (projects) {
    return res.status(200).json({ projects });
  } else return null;
}
export async function getProjectsById(req, res) {
  const id = req.params.id;
  const project = await getProjectsByIdFromBdd(id);
  if (project) return res.status(200).json({ project });
  else return null;
}
export async function getProjectsByTag(req, res) {
  const tag = req.params.tag;
  const projects = await get_ProjectsByTag(tag);
  if (projects) return res.status(200).json({ projects });
  else return null;
}

export async function getProjectByName(req, res) {
  const name = req.params.ProjectName;
  const projects = await get_ProjectByname(name);
  if (projects) return res.status(200).json({ projects });
  else return null;
}
export async function create_Project(req, res) {
  let img = req.file;
  const { linkWebsite, linkCode, title, description, techno, position } = req.body;

  if (req.file) img = '/img/' + req.file.originalname;

  const projects = await createProject({ img, linkWebsite, linkCode, title, description, techno, position });
  if (projects) return res.status(200).json({ projects });
  else return null;
}
export async function update_Project(req, res) {
  let img = req.file;
  const id = req.params.id;
  const { linkWebsite, linkCode, title, description, techno, position } = req.body;

  if (img) img = '/img/' + req.file.originalname;

  const project = await updatProject({ img, linkWebsite, linkCode, title, description, position, techno, id });
  if (project) return res.status(200).json({ message: 'Project has been update' });

  return null;
}

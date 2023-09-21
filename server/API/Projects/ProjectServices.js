import db from '../../Database/models';
const { Op } = require('sequelize');

export async function get_AllProjects() {
  const projects = db.Project.findAll({
    order: [['position', 'DESC']]
  });
  if (projects) return projects;

  return null;
}
export async function getProjectsByIdFromBdd(id) {
  const project = db.Project.findOne({
    where: { id: id }
  });
  if (project) return project;

  return null;
}

export async function get_AllTags() {
  const tags = db.Tag.findAll();

  if (tags) return tags;

  return null;
}
export async function get_AllTechnos() {
  const technos = db.Project.findAll({
    attributes: ['techno']
  });

  if (technos) return technos;

  return null;
}

export async function get_ProjectsByTag(tag) {
  const projects = db.Project.findAll({
    order: [['id', 'DESC']],
    where: {
      techno: {
        [Op.like]: `%${tag}%`
      }
    }
  });

  if (projects) return projects;

  return null;
}
export async function get_ProjectByname(name) {
  const projects = db.Project.findOne({
    where: { title: name }
  });

  if (projects) return projects;

  return null;
}

export async function createProject({ img, linkWebsite, title, linkCode, description, techno, position }) {
  const projects = db.Project.create({
    img: img,
    linkWebsite: linkWebsite,
    linkCode: linkCode,
    title: title,
    techno: techno,
    description: description,
    position: position
  });
  if (projects) return projects;

  return null;
}
export async function updatProject({ id, img, linkWebsite, title, linkCode, description, techno, position }) {
  const projects = db.Project.update(
    {
      img: img,
      linkWebsite: linkWebsite,
      linkCode: linkCode,
      title: title,
      description: description,
      techno: techno,
      position: position
    },
    { returning: true, where: { id: id } }
  );
  if (projects) return projects;

  return null;
}

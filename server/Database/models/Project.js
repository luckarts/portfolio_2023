'use strict';

export default (Sequelize, DataTypes) => {
  const Project = Sequelize.define(
    'Project',
    {
      img: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      linkCode: DataTypes.STRING,
      linkWebsite: DataTypes.STRING,
      techno: DataTypes.STRING,
      position: DataTypes.INTEGER
    },
    {}
  );
  Project.associate = models => {
    // Project.hasMany(models.Tag_Project, { as: 'tag_project', foreignKey: 'projectId', targetKey: 'id' });
  };
  return Project;
};

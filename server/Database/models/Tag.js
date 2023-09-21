'use strict';
export default (Sequelize, DataTypes) => {
  const Tag = Sequelize.define(
    'Tag',
    {
      name: DataTypes.STRING
    },
    {}
  );
  Tag.associate = models => {
    //Tag.hasMany(models.Tag_Project, { as: 'tag_project', foreignKey: 'tagId', targetKey: 'id' });
  };
  return Tag;
};

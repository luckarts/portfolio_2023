'use strict';
module.exports = (sequelize, DataTypes) => {
  const List_experience = sequelize.define(
    'List_experience',
    {
      description: DataTypes.STRING,
      experienceId: DataTypes.INTEGER
    },
    {}
  );
  List_experience.associate = function(models) {
    List_experience.belongsTo(models.Experience, {
      as: 'Experience',
      foreignKey: 'experienceId',
      targetKey: 'id'
    });
  };
  return List_experience;
};

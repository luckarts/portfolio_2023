'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define(
    'Experience',
    {
      year: DataTypes.INTEGER,
      date: DataTypes.STRING,
      job: DataTypes.STRING,
      company: DataTypes.STRING,
      link: DataTypes.STRING
    },
    {}
  );
  Experience.associate = function(models) {
    Experience.hasMany(models.List_experience, {
      as: 'list_experience',
      foreignKey: 'experienceId',
      targetKey: 'id'
    });
  };

  return Experience;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience_detail = sequelize.define(
    'Experience_detail',
    {
      year: DataTypes.INTEGER,
      date: DataTypes.STRING,
      fonction: DataTypes.STRING,
      company: DataTypes.STRING,
      link: DataTypes.STRING,
      experiencesId: DataTypes.INTEGER
    },
    {}
  );
  Experience_detail.associate = function(models) {
    Experience_detail.hasMany(models.List_experience, {
      as: 'list_experience',
      foreignKey: 'experienceDetailId',
      targetKey: 'id'
    });
    Experience_detail.belongsTo(models.Experience, { as: 'experience', foreignKey: 'experiencesId', targetKey: 'id' });
  };

  return Experience_detail;
};

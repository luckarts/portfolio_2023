'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gallery = sequelize.define(
    'Gallery',
    {
      image: DataTypes.STRING,
      link: DataTypes.STRING,
      category: DataTypes.STRING
    },
    {}
  );
  Gallery.associate = function(models) {
    // associations can be defined here
  };
  return Gallery;
};

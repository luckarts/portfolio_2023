'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProfile = sequelize.define(
    'UserProfile',
    {
      imgProfile: {
        type: DataTypes.STRING(150)
      },
      description: {
        type: DataTypes.TEXT()
      },
      cv: {
        type: DataTypes.STRING(80)
      }
    },
    {}
  );
  UserProfile.associate = function(models) {
    // UserProfile.belongsTo(models.User, { as: 'user', foreignKey: 'UserId', targetKey: 'id' });
  };

  return UserProfile;
};

'use strict';
import bcrypt from 'bcrypt';
const Salt_Factor = 10;
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING(20),
        allowNull: false,
        required: true,
        validate: {
          len: {
            arg: [5, 20],
            message: 'username has to between 2 and 20 characters'
          },
          is: /^[A-Za-z]+$/i
        }
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        lowercase: true,
        trim: true,
        required: true,
        unique: true,
        validate: {
          len: {
            arg: [5, 30],
            message: 'username has to between 2 and 30 characters'
          },
          is: /\S+@\S+\.\S+/
        }
      },

      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        required: true,
        unique: true,
        validate: {
          len: {
            arg: [5, 50],
            message: 'username has to between 2 and 30 characters'
          },
          is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        }
      }
    },
    {}
  );
  User.associate = function(models) {
    //  User.hasOne(models.UserProfile, { as: 'UserProfile', foreignKey: 'id', targetKey: 'id' });
  };

  function cryptPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, err => {
        // Encrypt password using bycrpt module
        if (err) {
          return reject(err);
        }

        bcrypt.hash(password, Salt_Factor).then(hash => {
          if (err) {
            return reject(err);
          }
          return resolve(hash);
        });
      });
    });
  }
  if (process.env.NODE_ENV !== 'test') {
    User.addHook('beforeCreate', user => {
      return cryptPassword(user.dataValues.password)
        .then(success => {
          user.password = success;
        })
        .catch(err => {
          if (err) {
            console.log(err);
          }
        });
    });
  }
  return User;
};

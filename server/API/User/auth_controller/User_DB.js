import db from '../../../Database/models';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;

/*
Function checks if username already exists in database.
Returns user if username already taken.
 */
export async function UsernameExist(username) {
  if (username === undefined || username === null) {
    throw new Error('no username was passed on db ');
  }

  const user = await db.User.findOne({
    where: { username }
  });

  if (user) {
    return user;
  }

  return null;
}

/*
Function checks if Email already exists in database.
Returns user if email already taken.
 */

export async function EmailExist(email) {
  if (email === undefined || email === null) {
    throw new Error('no email was passed on db ');
  }

  const user = await db.User.findOne({
    where: { email: email }
  });

  if (user) {
    return user;
  }

  return null;
}
// Select * from email where i = 1 Limit 1

/*
Function checks create User in database.
Returns user .
 */

export async function CreateUser(args) {
  if (!args.username) {
    throw new Error('invalid argument username');
  }
  if (!args.email) {
    throw new Error('invalid argument email');
  }
  if (!args.password) {
    throw new Error('invalid argument password');
  }

  const user = await db.User.create({
    username: args.username,
    password: args.password,
    email: args.email
  });

  return user;
}
export async function findUserIdOrFirstname(params) {
  if (!params) throw new Error('invalid argument: id');

  const user = await db.User.findOne({
    where: { email: params }
  });

  if (user) return user.dataValues;

  return null;
}
/*
Function delete User with username as params
 */
export async function DeleteUserID(username) {
  if (!username) {
    throw new Error('invalid argument: id');
  }
  const user = await db.User.destroy({
    where: {
      username
    }
  });

  return null;
}
export async function updatUser(description, cv) {
  const user = db.User.update(
    {
      description: description,
      cv: cv
    },
    { returning: true, where: { id: 2 } }
  );
  if (user) {
    return user;
  }
  return null;
}
export async function get_User() {
  const user = db.User.findOne({
    attributes: ['description', 'cv']
  });
  if (user) {
    return user;
  }
  return null;
}

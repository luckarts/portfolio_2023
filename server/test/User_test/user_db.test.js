import { UsernameExist, EmailExist, CreateUser, findUserIdOrFirstname } from '../../Services/User/User_DB';
import db from '../../Database/models';

async function Createusers() {
  return await db.User.create({
    username: 'test',
    password: 'Password45%',
    email: 'test@test.com',
    PermissionId: 1
  });
}
async function DestroyUser(user) {
  user.destroy({ where: {}, force: true });
}

describe('User Test', () => {
  /* Username test*/
  it('should see if username already exist in DB', async () => {
    const check = await UsernameExist('');

    expect(check).toBe(null);
  });
  it('Throw an error because no username was passed', async () => {
    try {
      const check = await UsernameExist('');

      expect(check).toBe(null);
    } catch (e) {
      expect(e.message).toMatch('no username was passed on db ');
    }
  });

  it('should see if user already exist and fail', async () => {
    const check = await UsernameExist('test');

    expect(typeof check === 'object').toBe(true);
    const test = await Createusers();

    await DestroyUser(test);
  });
  /* Email test*/
  it('should see if email already exist in DB', async () => {
    const check = await EmailExist('');

    expect(check).toBe(null);
  });
  it('Throw an error because no email was passed', async () => {
    try {
      const check = await EmailExist();

      expect(check).toBe(null);
    } catch (e) {
      expect(e.message).toMatch('no email was passed on db ');
    }
  });
  it('should see if  email already exist and fail', async () => {
    const check = await EmailExist('test@test.com');
    const test = await Createusers();

    await DestroyUser(test);
    expect(typeof check === 'object').toBe(true);
  });
  /* User test*/

  it('should see if user already exist and fail', async () => {
    const username = 'test';
    const password = 'Password45%';
    const email = 'test@test.com';

    const arg = { username, password, email };
    const user = await CreateUser(arg);

    await DestroyUser(user);
    expect(typeof user === 'object').toBe(true);
    expect(user.username).toBe(username);
    expect(user.password).toBe(password);
    expect(user.email).toBe(email);
  });
  it('should throw an error because no username was passed', async () => {
    try {
      const password = 'test';
      const email = 'test@test.com';
      const user = await CreateUser({ password, email });

      await user.destroy({ force: true });
    } catch (e) {
      expect(e.message).toMatch('invalid argument username');
    }
  });
  /* Permission id test*/

  it('should return user based on their id ', async () => {
    const test = await Createusers();
    const user = await EmailExist(test.email);

    await DestroyUser(user);
    expect(typeof user === 'object').toBe(true);
  });

  it('should throw an error because no user id was passed', async () => {
    const user = await Createusers();
    try {
      await EmailExist();
    } catch (e) {
      await user.destroy({ force: true });
      expect(e.message).toMatch('no email was passed on db ');
    }
  });
});

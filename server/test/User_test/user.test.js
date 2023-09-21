import { ValidUserExist } from '../../API/User/auth_controller/User_Services';
import db from '../../Database/models';

async function CreateUser() {
  return await db.User.create({
    username: 'test',
    password: 'Password45%',
    email: 'test@test.com'
  });
}
async function DestroyUser(user) {
  user.destroy({ where: {}, force: true });
}

describe('User Test', () => {
  it('should see if user already exist and fail', async () => {
    const test = await CreateUser();
    const check = await ValidUserExist('test', 'test@test.com');

    await DestroyUser(test);
    expect(typeof check === 'object').toBe(true);
  });
  it('should throw an error because', async () => {
    try {
      const check = await ValidUserExist();
      const test = await CreateUser();

      await DestroyUser(test);
      expect(typeof check === 'object').toBe(true);
    } catch (e) {
      expect(e.message).toMatch('username is empty');
    }
  });
});

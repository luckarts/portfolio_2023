import validate from 'validate.js';
import { ValidUserExist, CreateNewUser, generateJWT } from './User_Services';
export async function signup(req, res) {
  const contraints = {
    username: {
      presence: {
        message: 'Veuillez saisir votre pseudo'
      },

      length: { maximum: 50 }
    },
    password: {
      presence: { message: 'Ce mot de passe est trop court' }
    },

    email: {
      presence: { message: 'Veuillez saisir une adresse email' },
      email: true
    }
  };

  /*
Check data send by User .
Return message Error if object is empty or specification are not valid
 */
  const { username, password, email, PermissionId } = req.body;
  const validation = validate({ username, password, email }, contraints);

  if (validation) {
    return res.status(400).json({ error: validation });
  }

  /*
If Validation is true Call ValidUserExist if user already exist
 */
  const found_User = await ValidUserExist(username, email);

  if (found_User) {
    if (email === found_User.email) {
      return res.status(400).json({ error: { email: [`${email}  already taken`] } });
    }
    if (username === found_User.username) {
      return res.status(400).json({ error: { username: [`${username} already taken`] } });
    }
  }

  /*
If user did'nt exist create user
Return user with hash password and jwt
 */
  const token = generateJWT(req.body);
  const new_User = await CreateNewUser({
    username,
    password,
    email,
    PermissionId
  });

  return res.status(200).json({ message: 'User has been signed up !', new_User, token });
}

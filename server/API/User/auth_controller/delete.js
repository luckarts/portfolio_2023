import validate from 'validate.js';
import { DeleteUserID } from './User_DB';

export async function deleteUser(req, res) {
  const contraints = {
    username: {
      presence: {
        message: 'Veuillez saisir votre pseudo'
      },

      length: { maximum: 50 }
    }
  };
  const username = req.params.username;
  const validation = validate({ username }, contraints);

  if (validation) {
    return res.status(400).json({ error: validation });
  }

  await DeleteUserID(username);
  return res.status(200).json({ message: 'User has been delete!' });
}

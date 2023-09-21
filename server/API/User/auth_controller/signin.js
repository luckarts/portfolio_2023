import validate from 'validate.js';
import { EmailExist } from '../../../Services/User/User_DB';
import { isSamePassword } from './User_Services';
import jwt from 'jsonwebtoken';

export function signIn(req, res, next) {
  const contraints = {
    username: {
      presence: {
        message: 'Veuillez saisir votre pseudo'
      }
    },
    password: {
      presence: {
        message: 'Ce mot de passe est trop court'
      }
    }
  };
  /* if (req.isAuthenticated()) {
		localStorage.clear();
	} */
  const { password, username } = req.body;
  const validation = validate({ password, username }, contraints);
  if (validation) return res.status(400).json({ error: validation });
  next();
}

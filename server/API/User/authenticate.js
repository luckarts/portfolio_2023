import jwt from 'jsonwebtoken';
import { EmailExist } from './auth_controller/User_DB';
import dotenv from 'dotenv';
dotenv.config();
export default (req, res, next) => {
  const header = req.headers.authorization;
  let token;

  if (header) token = header.split(' ')[1];

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ errors: { global: err } });
      } else {
        EmailExist(decoded.user.email).then(user => {
          req.user = {
            id: user.dataValues.id
          };

          next();
        });
      }
    });
  } else {
    res.status(401).json({ errors: { global: 'No token' } });
  }
};

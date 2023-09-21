import { userSearch } from './auth_controller/User_Services';
import bcrypt from 'bcrypt';

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(
  new LocalStrategy((username, password, done) => {
    userSearch(username)
      .then((user, err) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, { err: { username: 'username incorrect' } });
        }

        bcrypt.compare(password, user.password).then(match => {
          if (match) {
            return done(null, user);
          }
          return done((null, { password: 'password incorrect' }));
        });
      })
      .catch(err => done(err, { err: { username: 'username incorrect' } }));
  })
);

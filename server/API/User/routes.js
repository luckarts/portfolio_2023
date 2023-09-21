import express from 'express';
import { asyncHandler } from '../../helpers/asyncHandler';
import { signup } from './auth_controller/signup';
import { update, getUser } from './auth_controller/update';
import passport from 'passport';
import authenticate from './authenticate';
import { generateJWT } from './auth_controller/User_Services';

import { jwtDecode } from '../../helpers/jwtDecode';
import { uploadPDF } from '../../helpers/multer/upload';

const router = express.Router();

router.post('/signup', asyncHandler(signup));
router.post(
  '/login',
  passport.authenticate('local', {
    failWithError: true,
    failureFlash: true,
    session: false
  }),
  function(req, res, err) {
    if (req.user.err) {
      console.log('err login');

      console.log(res, req);
      return res.status(401).send({ error: req.user.err });
    }
    const token = generateJWT(req.user);
    res.status(200).json({ user: req.user, token });
  },
  function(err, req, res, next) {
    return res.status(401).send({ error: err });
  }
);
router.get('/user', asyncHandler(getUser));
router.use(jwtDecode);
router.put('/update', uploadPDF, asyncHandler(update));

router.get('/profile', authenticate, (req, res) => {
  try {
    res.json(req.user);
  } catch (e) {
    localStorage.clear();
    res.status(500).json({ error: 'signUp failed' });
  }
});
export default router;

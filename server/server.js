import express from 'express';
import migration from './Database/models';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import dotenv from 'dotenv';
import getResize from './helpers/resize';
import {
  experienceRoutes,
  galleryRoutes,
  projectsRoutes,
  tagRoutes,
  userRoutes,
  userProfiles,
  TranslationsRoutes
} from './API';
import Routes from './API/Routes/routes';

import path from 'path';
import passport from 'passport';

dotenv.config();
const app = express();

// Log all requests to file, but errors to console
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 1000000 }));
app.use(passport.initialize());
import './API/User/passport';
// Définition des CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next();
});

migration.connection
  .authenticate()
  .then(() => console.log('database connected...'))
  .catch((err) => console.log(`Error:${err}`));

app.use(express.static(path.join(__dirname + '/../build')));

// Index Rout
app.use('/api/auth/', userRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/experiences', experienceRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/user_profile', userProfiles);
app.use('/api/tags', tagRoutes);
app.use('/api/translations', TranslationsRoutes);

app.use('/routes', Routes);
app.use('/thumb/img/:img', getResize);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../build/index.html'));
});

// error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');

  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

export default app;

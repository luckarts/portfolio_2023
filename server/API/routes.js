import express from 'express';
import resize from '../helpers/resize';
import user_routes from './User/routes';
import gall_routes from './Gallery/routes';
import exp_Routes from './Experiences/routes';
import projects_Routes from './Projects/routes';
const app = express();

app.use('/api/users', user_routes);
app.use('/api/gallery', gall_routes);
app.use('/api/experiences', exp_Routes);
app.use('/api/projects', projects_Routes);
app.use('/img/:img', resize);

export default app;

import { Router } from 'express';
// import User from './app/models/User';
// import UserController from './controllers/userController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientsController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.post('/addrecipients', RecipientController.store);
routes.use(authMiddleware);

export default routes;

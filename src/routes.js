import { Router } from 'express';
// import User from './app/models/User';
// import Recipient from './app/models/Recipient';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientsController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware.authenticated);
// routes.use(authMiddleware.isAdmin);
routes.post(
  '/addrecipients',
  authMiddleware.isAdmin,
  RecipientController.store
);

export default routes;

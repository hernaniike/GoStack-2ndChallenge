import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../../config/auth';
import User from '../models/User';

export default {
  async authenticated(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'Token not Provided!' });
    }
    const [, token] = authHeader.split(' ');
    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);

      req.body.userId = decoded.id;
      return next();
    } catch (err) {
      return res.status(401).json({ error: 'Token Invalid!' });
    }
  },

  async isAdmin(req, res, next) {
    const user = await User.findByPk(req.body.userId);
    if (!user.admin) {
      return res.status(401).json({ error: 'User does not have permission' });
    }
    return next();
  },
};

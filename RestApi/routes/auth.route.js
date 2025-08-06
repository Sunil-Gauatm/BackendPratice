import express from 'express';
import { UserController } from '../Controllers/auth.controller.js';

const Router = express.Router();

Router.post('/login', UserController.loginUser);
Router.post('/register', UserController.createuser);




export default Router;
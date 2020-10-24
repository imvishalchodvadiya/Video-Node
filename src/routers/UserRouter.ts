import { Router } from 'express';

import { UserController } from "../controllers/UserController";
import { UserValidator } from '../validator/UserValidator';

class UserRouter{

  public router: Router;
  
  constructor() {
    
    this.router = Router();
    this.postRouter();

  }

  postRouter() {
    this.router.post('/',UserValidator.signupValidator() ,UserController.singup);
  }

  

}

export default new UserRouter().router;
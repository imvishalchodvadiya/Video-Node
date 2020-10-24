import User from '../models/User';
const { validationResult } = require('express-validator');

export class UserController {

  static async singup(req, res, next) {

    const email = req.body.email;
    const password = req.body.password;
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const data = { email: email, password: password , firstname: firstname , lastname: lastname };
    
    try {

      let userResult = await new User(data).save();
      
      res.send(userResult);

    } catch (error) {
      next(error);
    }
      
  }

}
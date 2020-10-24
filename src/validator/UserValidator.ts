
const { body } = require('express-validator');

export class UserValidator {

  static signupValidator() {
    return [body('email', 'Email is required').isEmail(), body('password', 'password is required').isLength({ min: 5 }), body('lastname', 'Lastname is required').isString()];
  }
}
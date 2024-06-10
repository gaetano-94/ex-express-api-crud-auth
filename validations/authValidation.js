const { check } = require('express-validator');

// Validazione per la registrazione di un nuovo utente
const registerValidationRules = [
  check('email').isEmail().withMessage('Email è obbligatorio'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password deve essere di almeno 6 caratteri'),
];

// Validazione per il login
const loginValidationRules = [
  check('email').isEmail().withMessage('Email è obbligatorio'),
  check('password').exists().withMessage('Password è obbligatorio'),
];

module.exports = {
  registerValidationRules,
  loginValidationRules,
};

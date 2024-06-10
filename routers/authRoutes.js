const express = require('express');
const { register, login } = require('../controllers/authController');
const {
  registerValidationRules,
  loginValidationRules,
} = require('../validations/authValidation');

const router = express.Router();

// Rotta per registrare un nuovo utente
router.post('/auth/register', registerValidationRules, register);

// Rotta per effettuare il login
router.post('/auth/login', loginValidationRules, login);

module.exports = router;

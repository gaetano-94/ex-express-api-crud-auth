const express = require('express');
const {
  createPost,
  getPostBySlug,
  getAllPosts,
  updatePost,
  deletePost,
} = require('../controllers/postController');
const { postValidationRules } = require('../validations/postValidation');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

// Rotta per creare un post
router.post('/posts', authenticateToken, postValidationRules, createPost);

// Rotta per recuperare un post tramite slug
router.get('/posts/:slug', getPostBySlug);

// Rotta per recuperare tutti i post
router.get('/posts', getAllPosts);

// Rotta per aggiornare un post tramite slug
router.put('/posts/:slug', authenticateToken, postValidationRules, updatePost);

// Rotta per eliminare un post tramite slug
router.delete('/posts/:slug', authenticateToken, deletePost);

module.exports = router;

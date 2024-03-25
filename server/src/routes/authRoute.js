const { Router } = require('express');
const authController = require('../controllers/authControllers');
const router = Router()

router.get('/login', authController.login);
router.get('/callback', authController.callback);
router.get('/api/refreshToken', authController.refreshToken);

module.exports = router;
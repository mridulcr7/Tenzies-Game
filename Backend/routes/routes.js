const { Router } = require('express');
const authController = require('../controllers/authController');
const LeaderboardController = require('../controllers/LeaderboardController');
const ProfileController = require('../controllers/ProfileController');

const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

router.post('/signup', authController.signup_post);
router.post('/login', authController.login_post);
router.get('/leaderboard', requireAuth, LeaderboardController.getLeaderboard);
router.get('/userprofile', requireAuth, ProfileController.getUserProfile);
router.post('/gamerecord', requireAuth, LeaderboardController.addgamerecord);
module.exports = router;
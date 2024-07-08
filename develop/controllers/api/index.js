const router =require('express').Router();
// Import the routes
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
router.use('/users', userRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
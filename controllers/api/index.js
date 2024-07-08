const router =require('express').Router();
// Import the routes
const blogRoutes = require('./blogRoutes');
const commentRoutes = require('./commentRoutes');
router.use('/blogs', blogRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

User.HasMany(Blog)

Blog.HasMany(Comment)
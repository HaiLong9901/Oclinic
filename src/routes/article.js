const express = require('express');
const router = express.Router();
const articleRoute = require('../app/controllers/ArticleController');



router.use('/:slug', articleRoute.detail);
router.get('/', articleRoute.index);



module.exports = router;
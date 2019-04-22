const express = require('express'),
	authModule = require('./auth_routes'),
	userModule = require('./user_routes'),
	adminModule = require('./admin_routes'),
	router = express.Router();

router.use('/',authModule);
router.use('/admin',adminModule);
router.use('/user',userModule);

module.exports = router;
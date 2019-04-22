const express = require('express'),
	router = express.Router();

router.get('/',(req,res)=>{
	res.send('Auth module');
});

module.exports = router;
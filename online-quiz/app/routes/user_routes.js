const express = require('express'),
	router = express.Router();

router.get('/',(req,res)=>{
	res.send('User module');
});

module.exports = router;
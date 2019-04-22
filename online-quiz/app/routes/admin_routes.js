const express = require('express'),
	router = express.Router();

router.get('/',(req,res)=>{
	res.send('Admin module');
});

module.exports = router;
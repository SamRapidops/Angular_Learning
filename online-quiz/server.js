const express = require('express'),
	path = require('path'),
	routerModule = require('./app/routes/router')
 	app = express(),
	environment = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	config = require(path.join(__dirname, './app/config/' + environment )); 

app.use('/',routerModule);

app.listen(config.server.port,()=>{
	console.log(`Server started on port ${config.server.port}`);
});
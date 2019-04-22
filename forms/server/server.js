const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/' , (req,res)=>{
	res.send('Hello from server');
})

app.post('/enroll' , (req,res)=>{
	console.log(req.body);
	res.status(401);
	res.send({"message": "Data Recieved"});
})

app.listen(4001 , ()=>{
	console.log("server is running on localhost: 4001");
})
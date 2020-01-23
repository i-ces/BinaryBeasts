const express = require('express');
const app = express();



app.use('/', express.static('client'));

app.get('/check', function(req,res){
	res.send('Hello world');
});



const port = process.env.PORT || 3000;
app.listen( port, ()=>{
    console.log(`started on port ${port}`);
})


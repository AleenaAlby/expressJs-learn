const express = require('express')
const bodyParser = require('body-parser') //body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
//body parser will help us handle POST requests
const app = express()

// parse application/json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

//app.get to handle GET requests 
app.get('/',(req,res)=>{
   res.send("GET Request Called") //Sending a response
});

//app.post to handle POST requests 
app.post('/post', function (req, res) {
    res.send('POST Request Called') //Sending a response
  })

//allow express to access our html (index.html) file
app.get('/index.html', (req,res)=>{
    res.sendFile(__dirname + "/" + "index.html")
})

//get method to handle get request from index.html
app.get('/user', (req,res)=>{
    response ={
        first_name : req.query.first_name,
        last_name : req.query.last_name,
        gender : req.query.gender
    }
    console.log(res)
    res.end(JSON.stringify(response)) // res.end() function is used to end the response process.
})

//post method to handle post request from index.html
app.post('/users', (req,res)=>{
    response = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        gender : req.body.gender
    }
    console.log(response)
    res.end(JSON.stringify(response))
})

app.listen(3000, () => console.log(`Server Runnning....`))
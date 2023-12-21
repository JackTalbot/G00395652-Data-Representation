const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const path = require('path');

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://talbotjack86:JtCNwhxCubT54pLO@127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://talbotjack86:JtCNwhxCubT54pLO@127.0.0.1:27017/test');` if your database has auth enabled
}

const showSchema = new mongoose.Schema({
  title:String,
  cover:String,
  author:String
})

const showModel = mongoose.model('dfgdfgdfgdfg5r5645634fggh', showSchema);

app.delete('/api/show/:id',async (req, res)=>{
  console.log("Delete: "+req.params.id);

  let show = await showModel.findByIdAndDelete(req.params.id);
  res.send(show);
})


app.put('/api/show/:id', async(req, res)=>{
  console.log("Update: "+req.params.id);

  let show = await showModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(show);
})


app.post('/api/show', (req,res)=>{
    console.log(req.body);

    showModel.create({
      title:req.body.title,
      cover:req.body.cover,
      author:req.body.author
    })
    .then(()=>{ res.send("show Created")})
    .catch(()=>{ res.send("show NOT Created")});

})

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/api/shows', async(req, res)=>{
    
  let shows = await showModel.find({});
  res.json(shows);
})

app.get('/api/show/:identifier',async (req,res)=>{
  console.log(req.params.identifier);

  let show = await showModel.findById(req.params.identifier);
  res.send(show);
})

//add at the bottom just over app.listen
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const express = require('express')
// import * as express from 'express'
const mongo = require('mongoose')
// const bodyparser = require('body-parser')
const cors = require('cors')


const app = express()
const port = 5007

app.use(express.json());
app.use(cors());

// connect to mongodb
mongo.connect("mongodb://localhost:27017/canteen-management")
.then(console.log("connected to DB"))
//.the(()=>{console.log("connection established})

const foodSchema= new mongo.Schema({
    image_url:String,
    item_name:String,
    rate:Number
    
  })

  const foods = mongo.model('foodDetails',foodSchema)
//till this


//Insert
app.post('/add',(req,res)=>{
    const Foods  = new foods(req.body);
    Foods.save()
    .then(()=>{
        res.status(200).json({message:"Food added successfully"});
        console.log(Foods,"Added");
})
 .catch((err)=>{
     console.log(err);
   })})


//Retrieval
app.get('/server', (req,res)=>{
  foods.find().then((data)=>{
    res.send(data)
  })
})




//updation
// app.post('/update',(req,res)=>{

//   const Foods  = new foods(req.body);
//   foods.updateOne({item_name : req.body.item_name},{$set:req.body})
//   .then((result)=>{
//     if(result.nModified > 0){
//       res.status(200).json({message:"Food updated successfully"});
//       console.log(req.body,"Updated");
//     }
//     else{
//       res.status(404).json({message:"Food not found"});
//     }
  
//  })})


app.put('/update', (req, res) => {
  foods.findOneAndUpdate({ item_name: req.body.item_name }, req.body)
    .then((result) => {
      if (result) {
        res.status(200).json({ message: "Food updated successfully" });
        console.log(req.body, "Updated");
      } else {
         res.json({ message: "Food not found" });
        console.log("Food not FOund");

      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Error updating food" });
      console.log(err);
    });
});

//Deletion

app.delete('/delete', (req, res) => {
  foods.findOneAndDelete({ item_name: req.body.itemNameToDelete })
   .then((result) => {
      if (result) {
        res.status(200).json({ message: "Food deleted successfully" });
        console.log(req.body.item_name, "Deleted");
      } else {
        // res.status(404).json({ message: "Food not found" });
        console.log("Food not FOund");

      }
    })
   .catch((err) => {
      res.status(500).json({ message: "Error deleting food" });
      console.log(err);
    });
});

//this
app.listen(port, () => {
    console.log("server running on port "+port)
  })
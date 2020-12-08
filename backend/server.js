const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/car_brands" , { useNewUrlParser: true , useCreateIndex: true ,  useUnifiedTopology: true })

const connection = mongoose.connection
connection.once('open', () =>{
    console.log("connected to mongodb...")
})

const Schema = mongoose.Schema;

const brandsSchema = new Schema({
    name: String ,
    scale: Number ,
    price: String ,
    priceRange: String 
})

const Brands = mongoose.model('Brands' , brandsSchema);

app.get('/brands' , function (req , res) {
    Brands.find()
        .then(users =>res.json(users))
        .catch(err => res.satus(400).json('Error ' + err))

})

const visitorsCount = new Schema({
    _id: Number,
    count : Number 
})

const Visitors = mongoose.model('Visitors' , visitorsCount)

Visitors.find({} , function(err , visitors){
    if(visitors.length === 0)
    {
        let _id = 1
        let count = 0;
        const newCount = new Visitors ({_id , count});
      
        newCount.save()
    }
})

app.get('/visitors' , function (req , res) {
    Visitors.find()
        .then(visitors =>res.json(visitors))
        .catch(err => res.satus(400).json('Error ' + err))

})

app.post('/visitorsUpdate' , function (req , res){  
      try{
        Visitors.updateOne({_id: 1} , {count: req.body.count} , function(err){
            if(err){
                console.log(err)
            }
      }
  )
      } catch (err) {
        res.status(500).json({ error: err.message });
      }   
})


const signupRouter = require('./routes/userRouter')

app.use('/users' , signupRouter)

app.listen(5000 , () => {
    console.log('Server running on port 5000 ....')
})
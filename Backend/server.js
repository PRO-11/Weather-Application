const express=require("express");
const app=express();
var cors = require('cors');
app.use(cors());
const axios = require('axios').default;
app.use(express.json())
app.listen(8000,()=>{
console.log(`http://localhost:8000`);
})

app.post('/apiweather', async function (req, res) {
   const data=req.body.city;
   const arr=new Array();
   let flag=data.length
   data.forEach(element => {
    axios.get(`http://api.weatherstack.com/current?access_key=2c383904ef2b6a1b9293ffc2c22e8eaf&query=${element}`)
  .then(function (response) {
    console.log(response.data.current.temperature)
    arr.push(response.data.current.temperature)
    flag--;
    if(!flag)
    res.status(200).json({'ans':arr});
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    res.status(400).json({'ans':"12"})
  })
   });
  
   
 })
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json())
 
app.get('/api/calculate-your-body-mass-index/imc-ranges', function (req, res) {
  res.status(200).json(imc_ranges);
})

app.post('/api/calculate-your-body-mass-index/imc-ranges',function(req,res){
  let new_range = req.body;
  imc_ranges.push(new_range);
  res.status(201).send(imc_ranges);
})

app.get('/api/calculate-your-body-mass-index/limits', function (req, res) {
  res.status(200).json(limits);
})
 


module.exports = app;
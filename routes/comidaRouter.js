const express = require('express')
const router = express.Router()

router.get('/comida', (req,res) =>{
  return res.json({message:"Aqui toy"})
})

module.exports=router
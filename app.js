const express = require("express")
const app = express()
const port = 3500
const comidaRouter = require('./routes/comidaRouter')
const morgan = require('morgan')

app.use(express.urlencoded({extended:false}))
app.use(express.json());

app.use(morgan('dev'))
app.use('/api', comidaRouter )

app.use((req,res) =>{
  res.status(404).send({message: 'Not Found'})
});

app.listen(port,() =>{
  console.log(`Servidor funcionando en el puerto ${port}`)
})
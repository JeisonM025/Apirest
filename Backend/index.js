
require('./config/conexion');
const express = require('express');
const port = (process.env.PORT || 3000);

//express
const app = express();

//admitir tipo de dato
app.use(express.json())

//config 
app.set('port',port)

//rutas
app.use('/api', require('./rutas'))

//iniciamos express
app.listen(app.get('port'),(err)=>{
    if(err){
        console.log('hay un error al iniciar el servidor: '+ err)
    }
    else{
        console.log('*conectada al puerto:' + port)
    }
})
const mysql =require('mysql');//conf conexion my sql
const conexion =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'nomina_pasteleria'
});//conf conexion 
conexion.connect((err)=>{
    if(err){
        console.log("ha ocurrido un error: "+ error);
    }
    else{
        console.log("La base de datos se conecto!! :) ");
    }
});

module.exports = conexion;
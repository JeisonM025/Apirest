const router = require('express').Router()
const conexion = require('./config/conexion')
//asignacion de todas la rutas

//primer metodo get

//get personas
router.get('/',(req, res)=>{
    const sql = 'SELECT * from personas'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }       
    })
})
//una persona get
router.get('/:id',(req, res)=>{
    const {id}=req.params
    const sql = 'SELECT * from personas where IdPersona = ?'
    conexion.query(sql, [id], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }       
    })
})

//agregar persona

router.post('/' ,(req, res)=>{
    const{primerNombre, segundoNombre, primerApellido, segundoApellido, fechaNacimiento, tipoSangre, 
        tic_Doc, num_Doc, activo, EPS_emp} =req.body

        let sql= `insert into personas(primerNombre, segundoNombre, primerApellido, segundoApellido, fechaNacimiento, tipoSangre, tic_Doc, num_Doc, activo, EPS_emp) values('${primerNombre}','${segundoNombre}','${primerApellido}','${segundoApellido}','${fechaNacimiento}','${tipoSangre}','${tic_Doc}','${num_Doc}','${activo}','${EPS_emp}')`
        conexion.query(sql, (err, rows, fields)=>{
            if(err) throw err;
            else{
                res.json({status: 'Persona insertada en la base de datos'})
            }
        })
})

//eliminar

router.delete('/:id', (req, res)=>{
        const{id}=req.params
        let sql=`delete from personas where IdPersona = '${id}'`
        conexion.query(sql, (err, rows, fields)=>{
            if(err) throw err;
            else{
                res.json({status: 'Persona eliminada'})
            }
        })
})
//modificar persona
router.put('/:id', (req, res)=>{
    const {id}=req.params
    const{primerNombre, segundoNombre, primerApellido, segundoApellido, fechaNacimiento, tipoSangre, 
        tic_Doc, num_Doc, activo, EPS_emp} =req.body
    let sql=`update personas set
    primerNombre='${primerNombre}',
    segundoNombre='${segundoNombre}',
    primerApellido='${primerApellido}',
    segundoApellido='${segundoApellido}',
    fechaNacimiento='${fechaNacimiento}',
    tipoSangre='${tipoSangre}',
    tic_Doc='${tic_Doc}',
    num_Doc='${num_Doc}',
    activo='${activo}',
    EPS_emp='${EPS_emp}'
    where IdPersona='${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json({status: 'Persona actualizada'})
        }
    })
})


//========================================
module.exports = router;

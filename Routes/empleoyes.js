const express = require("express"); //Declara express
const router = express.Router(); //Obtiene las rutas
const mysqlConection = require("../database"); //Importa la conexión de database

//Por el METODO GET  genera una consulta a la bd
router.get("/api/empleoyes/", (req, res) => {
        mysqlConection.query("SELECT * FROM empleoyes", (err, rows, fields) => {
            if (!err) {
                res.json(rows) //Muestra el resultado
            } else {
                res.json(err) //Muestra el error
            }
        })
    })
    //Por el METODO GET y pasando un valor obtiene un registro por su ID
router.get("/api/empleoyes/:id", (req, res) => {
        const { id } = req.params
        mysqlConection.query("select * from empleoyes where id = ?", [id], (err, rows, fields) => {
            if (!err) {
                res.json(rows[0]) //Muestra el resultado
            } else {
                res.json(err) //Muestra el error
            }
        })
    })
    //Por el METODO POST Guarda un nuevo registro dentro de la BD
router.post("/api/empleoyes/", (req, res) => {
        const { id, name, salary } = req.body
        const query = "INSERT INTO empleoyes (nombre, salario) VALUES (?, ?)"
        mysqlConection.query(query, [name, salary], (err, rows, fields) => {
            if (!err) {
                res.send("Enviado")
            } else {
                console.log(err)
                console.log("Error")
            }
        })

    })
    //Por medio del METODO PUT se actualiza un registro
router.put("/api/empleoyes/:id", (req, res) => {
        const { id } = req.params
        const { name, salary } = req.body
        var data = "";
        var array = []
        if (name) {
            if (data.length != 0) {
                data += ","
            }
            data += "nombre= ?"
            array.push(name);
        }
        if (salary) {
            if (data.length != 0) {
                data += ","
            }
            data += "salario= ?"
            array.push(salary);
        }
        array.push(id);
        const query = 'update empleoyes set ' + data + ' where Id =?;'
        mysqlConection.query(query, array, (err, rows, fields) => {
            if (!err) {
                res.json({ status: "Actualizado" })
            } else {
                console.log(err)
                console.log("Error")
            }
        })

    })
    //Por medio del METODO DELETE se elimina un registro
router.delete("/api/empleoyes/:id", (req, res) => {
    const { id } = req.params
    mysqlConection.query("delete from empleoyes where id = ?", [id], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Elimiado' })
        } else {
            console.log(err)
            console.log("Error")
        }
    })
})
module.exports = router; //Exporta la ruta
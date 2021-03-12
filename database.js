const mysql = require("mysql") //Se declara mysql 
    //Se genera la conexión a mysql
const mysqlConacttion = mysql.createConnection({
        host: 'localhost', //Se declara el host de la bd
        user: 'sergioMaya', //Obtenemos el usuario al que se conectara
        password: 'Ptree2021ñ', //Obtiene el password
        database: 'test' //Se hace la referencia al bd
    })
    //Valida que la conexión este funcionando
mysqlConacttion.connect(function(error) {
    if (error) {
        console.log(error)
        return error
    } else {
        console.log('DB conection')
    }
})
module.exports = mysqlConacttion //Exporta la conexión
const express = require('express')
const app = express()
app.use(express.json());

var port = process.env.PORT || 8000; //Obtenemos el puerto por donde se conecta
//Respuesta de la ruta padre
app.get('/', function(req, res) {
    //Genera la respuesta que se dara
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio'
    };
    res.send(respuesta); //Envia una respuesta
});
app.use(require("./Routes/empleoyes")); //Genera una ruta para llamarla;
app.listen(port); //llama el puerto
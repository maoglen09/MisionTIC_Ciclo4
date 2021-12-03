// Importar express
const express = require('express');
// Crear la app de express, como lo enseñó el profesor es mejor hacerlo por clases, creando un servidor y este paso hacerlo dentro de un constructor
const app = express();
// urlencoded se utiliza para reconocer el objeto de solicitud como arrays (o eso entendí), json para reconocer el objeto de solicitud como json
app.use(express.urlencoded({extended:false}));
app.use(express.json())
 
/* Como enseñó el profesor y por motivos de escalabilidad lo ideal es que el index.js (en este caso el src.js) no sea el que administre todo, sino que simplemente se encargue de
utiizar routers que administran las rutas de acceso (la url) y que desde estas se llame a controladores que son los que se encargan de manejar las peticiones y las respuestas, 
por simplicidad y por la configuración del bot se hace todo acá*/

/* Petición get, para cualquier petición se necesita 2 cosas: la ruta y la función a ejecutar, esta podría haber sido una función an+onima pero lo olvidé jaja
el documento especifica que imc_ranges.json se encuentra disponible dentro del entorno de pruebas por lo que se puede acceder a él directamente, si se hace 
la prueba de forma local hay que crear la variable o (creo) se puede obtener a partir de la url provista con lo que se hizo en el sprint pasado (fetch)*/
app.get('/api/calculate-your-body-mass-index/imc-ranges', function (req, res) {
 // siempre dar respuesta al cliente, petición get satisfactoria 200 .json es para enviar la respuesta solicitada
  res.status(200).json(imc_ranges);
})

/*Petición post, el cliente envía información, usualmente a través del cuerpo de la petición o a través de la url req.params*/
app.post('/api/calculate-your-body-mass-index/imc-ranges',function(req,res){
 /* el usuario crea un nuevo rango como un json, se añade al arreglo disponible mediante un  push. En mi opinión, si se quisiera ser más riguroso el arreglo debería
 ordenarse antes de retornar. Respuesta para creación de datos es 201 */
 let new_range = req.body;
  imc_ranges.push(new_range);
  res.status(201).send(imc_ranges);
 // ahora que lo pienso esto debería haber sido .json y no .send   bueno igual funcionó
})

// petición get, solo cambia la ruta
app.get('/api/calculate-your-body-mass-index/limits', function (req, res) {
  res.status(200).json(limits);
})
 
// ojo, para correr a nivel local hay que poner el servidor a la escucha, usualmente por el puerto 3000, hacer peticiones a través de postman o thunderclient

module.exports = app;

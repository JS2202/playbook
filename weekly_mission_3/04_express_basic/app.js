const express = require('express');

const app = express();

const port = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('Hello world!');
});
//devuelve la respuesta de hello world
app.get('/launchx', (req, res) => {
    res.send('Welcome to Launch X');
});

//devuelve un objeto json con el nombre de la persona y el mensaje
app.get('/exploresInNode', (req, res) => {
    const explorer = {
        name: "Explorer",
        msg: "Hello"
    };
    res.send(explorer);
});

//query params sirve para obtener parametros de la url y poderlos usar en el codigo de la aplicacion
//:explorerName es un parametro que se puede usar en la url para obtener el nombre de la persona que se quiere buscar
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
});

// Inicializamos el servidor en el puerto 3000 de localhost
app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});


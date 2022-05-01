const express = require('express');

const app = express();

const port = 3000;

// Routes
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/launchx', (req, res) => {
    res.send('Welcome to Launch X');
});

app.get('/exploresInNode', (req, res) => {
    const explorer = {
        name: "Explorer",
        msg: "Hello"
    };
    res.send(explorer);
});

app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params);
});

// Iniciañozar app en el puerto 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});


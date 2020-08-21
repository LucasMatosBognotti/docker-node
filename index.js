const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World !!!!!');
});

app.listen(PORT, HOST);

/*
    docker build -t dockernode .

    docker run -p 3000:3000 -d dockernode

    docker-compose up
*/
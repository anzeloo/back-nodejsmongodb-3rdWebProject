//ESTE ES EL SERVIDOR - usar express e inicializarlo
const express = require('express');
const app = express();

app.listen(4000, () => {
    console.log('Server is listening');
})
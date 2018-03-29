// Server is for development & testing purposes only
const express = require('express');
const { port } = require('./config');

const app = express();

app.use(express.static('public'));
app.listen(port, () => console.log(`Tic Tac Toe is now running on port ${port}`));

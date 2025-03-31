const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, '../public/.html')));
app.use(express.static(path.join(__dirname, '../public/.css')));
app.use(express.static(path.join(__dirname, '../public/.js')));
app.use(express.static(path.join(__dirname, '../public/Image_galerie')));
app.use(bodyParser.json());

const routes = require('./routes');
app.use('/', routes);

module.exports = app;
var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/lib', express.static('node_modules'));
app.listen(3000);

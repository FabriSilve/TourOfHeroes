const express = require('express');
const app = express();

app.use(espress.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
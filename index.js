require('dotenv').config();

const express = require('express');

const app = express();

require('./services/mqtt.service');

/* static files */
app.use(express.static('./public'));

app.use(require('./routes'));

app.listen(8080, () => {
    console.log('Listening to port 8080');
});
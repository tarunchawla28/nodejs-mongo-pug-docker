const express = require('express');
const app = express()
require('./startup/db')
require('./startup/routes')(app);
require('./startup/db')()

app.listen(3011, () => console.log('App is running on 3011'))
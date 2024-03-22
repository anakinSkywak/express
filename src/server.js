const express = require('express');
// const path = require('path');
const app = express();
require('dotenv').config();
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');


const port = process.env.POST || 3000;
const hostName = process.env.HOST_NAME;


configViewEngine(app);
app.use('/products', webRoutes);




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
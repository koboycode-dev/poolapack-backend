const express = require('express')
const app = express()
const routes = require('./routes')
require("dotenv").config()

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(routes);

const server = app.listen(process.env.APP_PORT, () => console.log(`Api Running in Port ${process.env.APP_PORT}`))

module.exports = server
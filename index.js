require("dotenv").config();
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use("/api/users" , userRouter);

  app.listen(process.env.APP_PORT, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })
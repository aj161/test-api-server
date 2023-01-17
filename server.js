"use strict";

const express = require("express");
const cors = require ("cors");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.get("/", (req,res)=>{
  res.status(200).send('all is great')
});


app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
const express = require("express");
app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());

//const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://tal3:lqPlF8vfOm7Vd2Qt@tal-test1.m39if.mongodb.net/tsofn48', { useNewUrlParser: true, useUnifiedTopology: true });


const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});

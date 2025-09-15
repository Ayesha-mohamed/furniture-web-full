const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const productRoute = require('./routers/productRoute');
const contactRoute = require('./routers/ContactRouter')

const app = express()

const port = process.env.port || 3000;      

app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.db_url).then(()=> console.log("connected to database"))
mongoose.connect(process.env.db_url).then(()=> console.log("connected to database"))


app.use("/allproductimage", express.static("prImages"))

app.use(productRoute)
app.use(contactRoute)

app.listen(port, () => console.log(`Server started on port ${port}`));
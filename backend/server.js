// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require("dotenv").config();
// const productRoute = require('./routers/productRoute');
// const contactRoute = require('./routers/ContactRouter')
// const userRouter = require("./routers/userRouter")
// const orderRoutes =  require("./routers/orderRoutes")
// const AdminRouter = require("./routers/adminRouter")



// const app = express()

// const port = process.env.port || 3000;      

// app.use(cors());
// app.use(express.json());


// mongoose.connect(process.env.db_url).then(()=> console.log("connected to database"))

// mongoose.connect("mongodb://127.0.0.1:27017/furniture-Store")
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.log(err));

// // Routes
// // const productRoutes = require("./routes/products");
// // app.use("/api/description", Routes);

// app.use("/allproductimage", express.static("prImages"))

// app.use(productRoute)
// app.use(productRoute)

// app.use(contactRoute)

// app.use(userRouter)
// app.use(AdminRouter)
// app.use(userRouter)
// app.use(orderRoutes)

// app.listen(port, () => console.log(`Server started on port ${port}`));


//
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const productRoute = require('./routers/productRoute');
const contactRoute = require('./routers/ContactRouter')
const userRouter = require("./routers/userRouter")
const orderRoutes =  require("./routers/orderRoutes")
const AdminRouter = require("./routers/adminRouter")


const app = express()

const port = process.env.port || 3000;      

app.use(cors());
app.use(express.json());

// mongoose.connect(process.env.db_url).then(()=> console.log("connected to database"))
mongoose.connect(process.env.db_url).then(()=> console.log("connected to database"))


app.use("/allproductimage", express.static("prImages"))

app.use(productRoute)

app.use(contactRoute)

app.use(userRouter)
app.use(AdminRouter)
app.use(userRouter)
app.use(orderRoutes)

app.listen(port, () => console.log(`Server started on port ${port}`));


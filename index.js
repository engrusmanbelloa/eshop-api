// required libraries
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require("cors");

// routes imports
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL)
    .then(() => 
    console.log("DB connection successful"))
    .catch((err)=> {
        console.log("err")
    });

// express routes usage 
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// listening port for the app 
app.listen(process.env.PORT || 8000, ()=> {
    console.log("listening on 8000");
})

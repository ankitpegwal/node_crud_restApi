const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = 5000;
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("Connect to Database"))
    .catch((err) => console.log(err))



const productRoutes = require('./routes/products.js')
const categoryRoutes = require('./routes/category.js')
app.use(bodyParser.json());
app.use("/product", productRoutes)

app.use("/category", categoryRoutes)






app.listen(PORT, () => {
    console.log(`Server Running port ${PORT}`);
})


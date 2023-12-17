const express = require("express");
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors')

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json({limit: '35mb'}));
app.use(express.urlencoded({limit: '35mb'}));

routes(app);

mongoose.connect(`${process.env.MONGO_DB}`)
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log(err)
})
app.listen(port, () => {
    console.log('Server is running at http://localhost:', +port)
}) 
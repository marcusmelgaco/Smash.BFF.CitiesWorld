require("dotenv").config();

const bodyParser = require("body-parser");
const app = require("express")();
var timeout = require('connect-timeout');

let server = "";

server = app.listen(process.env.PORT || 3000);

const routes = require("./src/routes")();
const cors = require("cors");

app.use(cors());
app.use(timeout(180000))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);

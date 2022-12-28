express = require("express");
cors = require("cors");
db = require("./models");
app = express();

cors = require("cors");
bodyParser = require("body-parser");

//Configurations de cors y lectura de json
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", require("./routes/auth"));
//imports

//settings
app.set("port", 3000);

//run
app.listen(app.get("port"), () => {
  console.log("Server on Port 3000");
});

db.sequelize
  .sync({ force: false })
  .then(() => console.log("Conectado"))
  .catch((e) => console.log("${e}"));

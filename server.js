const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("./db.js");

const app = express();
const port = 4000;
const routeAkses = require("./routes.js");
const routeAksesUser = require("./routes-user.js");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use("/book", routeAkses);
app.use("/user", routeAksesUser);

app.listen(port, () => {
  console.log("server berhasil dijalankan pada port: " + port);
});

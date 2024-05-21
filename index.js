const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./routes/job");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb+srv://adminsk:YsKjE2NwIVtFBc5X@sanjayvarma.xshqamj.mongodb.net/") 
  .then(() => console.log("Connection with Database established successfully"))
  .catch((err) => console.log("ERROR CONNECTING WITH DATABASE", err));

app.use(jobRoutes);

app.listen(10000, () => console.log("Server is up and running at port 8080"));

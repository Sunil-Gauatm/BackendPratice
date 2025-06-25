import express from "express";
import Auth from "./route/Auth.route.js";
import Connection from "./config/dbConnection.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/Auth", Auth);


app.get("/", (req, res) => {
  res.render("index");
});


app.listen(5000, () => {
  Connection;
  console.log("listening to 5000 port");
});

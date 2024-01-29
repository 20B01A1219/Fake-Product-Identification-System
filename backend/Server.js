const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyparser.json());
const port = 8000;
const mysql_connector = require("mysql");
const connection = mysql_connector.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fakeproductidentification",
  port: 3307,
});

app.post("/", (req, res) => {
  const { email, name, company, empid, password } = req.body;
  const sqlqry =
    "INSERT INTO registrations (email, name, company, empid, password) VALUES (?, ?, ?, ?, ?)";
  const values = [email, name, company, empid, password];
  connection.query(sqlqry, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else{
      res.status(200).send("Registration Success");
    } 
  });
});
app.post("/login",(req, res)=>{
  const {email, password} = req.body;
  const values = [email, password];
  const loginqry = "select * from registrations where binary email = ? and binary password = ?";
  connection.query(loginqry, values, (err, result)=>{
    if (err) {
      res.status(500).send(err);
    } else{
      res.status(200).send(result);
    } 
  })
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

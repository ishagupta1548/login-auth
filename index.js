const express = require("express");
const app = express();
const user = require("./Router/user");
app.use(express.json());

let arrUser = [
  { name: "isha", dep: ["sales"] },
  { name: "isha1", dep: ["marketing"] },
];

app.get("/", (req, res) => {
  // logic to addd an entry in the array ?

  fetch('').then(() =>{
    
  }).then(() => {
    res.send(data)
  })
  // res.send("Hello world");
});

app.use("/api", user);
// app.post("/createUser", (req, res) => {
//   console.log("here");
//   let user = req.body;
//   console.log(req.body);
//   res.send("Hello world!s");
// });

app.listen(3000, () => {
  console.log("Listening at port 3000");
});

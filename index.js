const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Helm CI/CD working 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

//You did a great job
const express = require("express");
const app = express();
app.get("/", (req, resp) => {
  resp.send("listening!");
});
app.listen(3000, () => {
  console.log("server started!");
});

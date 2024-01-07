const express = require("express");
const cors = require("cors");
const app = express();

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {});
}

app.use(cors());
app.get("/api/", (req, res) => {
  res.json({
    message: "hello",
  });
});

module.exports = app;

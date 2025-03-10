const express = require("express");
const app = express();
const port = 8001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routers"));

app.listen(port, () => {
  console.log(`Your application running on http://localhost:${port}`);
});

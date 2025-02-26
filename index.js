const express = require('express')
const app = express()
const port = 8001

app.use("/", require("./controllers/router"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
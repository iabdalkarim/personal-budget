const express = require("express");
const morgan = require("morgan");

const app = express();

const PORT = 4001 || process.env.PORT;

app.use(morgan("dev"));

app.get("/", (req, res, next) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log("Server Listening to port " + PORT);
});

require("dotenv").config();
const express = require("express");
const routes = require("./api");

const { PORT } = process.env;

const app = express();

app.get("/ping", (req, res) => res.sendStatus(200));
app.use("/api/movie", routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

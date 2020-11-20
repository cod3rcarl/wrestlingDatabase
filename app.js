const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const port = 5000;
const wrestlersRouter = require("./routes/wrestlers");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use("/wrestlers", wrestlersRouter);

app.listen(process.env.PORT || port, () =>
  console.log(`Server is running...${port}`)
);

module.exports = app;

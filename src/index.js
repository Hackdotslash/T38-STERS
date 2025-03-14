require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const { connectWithDatabase } = require("./config/dbConfig");

connectWithDatabase().then(() => {
  app.listen(PORT, () =>
    console.log("Server is running at http://127.0.0.1:" + PORT)
  );
});

const app = express();
const PORT = process.env.PORT || 5000;

//cors & helmet => for security
app.use(cors());
app.use(helmet());

// used to log requests
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(
  express.json({
    extended: false,
  })
);

app.use("/api/form", require("./router/healthForm"));
app.use("/api/camp", require("./router/camp"));
app.use("/api/admin", require("./router/admin"));

app.get("/", (req, res) => {
  res.json("API running.");
});

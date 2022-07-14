require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connection = require("./db.js");
const userRoutes = require("./routes/users.js");
const authRoutes = require("./routes/auth.js");

// middlewares
const app = express();
const PORT = process.env.PORT || 5000;

// check port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// check db connection
connection();

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
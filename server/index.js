const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoute = require("./routes/auth");
const sellRoute = require("./routes/sell");
const buyRoute = require("./routes/buy");
const cropsRoute = require("./routes/crops");
const orderRoute = require("./routes/order");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
connectDB();

// Routes
app.use("/api", authRoute);
app.use("/api", sellRoute);
app.use("/api", buyRoute);
app.use("/api", cropsRoute);
app.use("/api", orderRoute);

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
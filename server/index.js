const authRoute = require("./routes/auth");
const connectDB = require("./config/db");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const sellRoute = require("./routes/sell");
const buyRoute = require("./routes/buy");
const cropsRoute = require("./routes/crops");
const orderRoute = require("./routes/order");



app.use("/api", authRoute);

app.use("/api", sellRoute);
app.use("/api", buyRoute);
app.use("/api", cropsRoute);
app.use("/api", orderRoute);
connectDB();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

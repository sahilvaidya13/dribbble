const express = require("express");
const sequelize = require("./sequelize");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const app = express();
sequelize
  .sync()
  .then(() => {
    console.log("Models synced with the database.");
  })
  .catch((err) => {
    console.error("Error syncing models:", err);
  });
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api", require("./routes/main"));

app.listen(PORT, () => {
  console.log("Server running on PORT:5000");
});

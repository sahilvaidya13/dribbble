const express = require("express");
const sequelize = require("./sequelize");
const cors = require("cors");
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

app.listen("5000", () => {
  console.log("Server running on PORT:5000");
});

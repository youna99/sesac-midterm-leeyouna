const express = require("express");
const app = express();
const PORT = 8080;
const router = require("./routes/todo");
const { sequelize } = require("./models/index");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection succeeded!");
      console.log(`sever is running! Port number is ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
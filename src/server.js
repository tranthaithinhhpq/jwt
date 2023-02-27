import express from "express";
import configViewEngine from "./configs/viewEngine";
import intWebroutes from "./routes/web";
require("dotenv").config()

const app = express();

configViewEngine(app);

intWebroutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Port", PORT);
});

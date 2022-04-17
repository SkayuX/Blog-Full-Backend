import express from "express";
import cors from "cors";
import router from "./Router";
import mongoose from "mongoose";

const app = express();

// which links can access the api
const arrayOfAuthorizedURLs = ["localhost"];

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  const name = arrayOfAuthorizedURLs.find((x) => x === req.hostname);

  if (req.hostname === name) {
    next();
  } else {
    return console.log(`Not ${name} wanted to access the API!`);
  }
});

app.use("/api", router);

mongoose.connect("mongodb://localhost:27017/blogslist");

app.listen(8080 || process.env.PORT, () => {
  console.log(`Express API Listening on port ${process.env.PORT || 8080}`);
});

process.on('uncaughtException', (e) => {
  console.log(e)
})
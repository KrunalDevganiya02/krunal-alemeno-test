import express from "express";
const app = express();
const port = 8000;

import fs from "fs-readfile-promise";
import cors from "cors";

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("this is home");
});

app.get("/course", async (req, res) => {
  const buffer = await fs("./data.json", "utf8");
  buffer.toString();
  res.status(200).send(buffer);
});

app.listen(port, (req, res) => {
  console.log("server is running");
});

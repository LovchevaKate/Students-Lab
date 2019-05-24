import express from "express";
import path from "path";

const app = express();

app.use("/", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(path.join(__dirname, "public"), "index.html"));
});

app.listen(3000, () => console.log("server started on http://localhost:3000"));

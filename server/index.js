import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("RushFee backend is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("RushFee backend listening on port " + PORT);
});

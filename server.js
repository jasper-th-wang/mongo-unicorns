const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://jasper8777:xuhbe1-Nibcyr-hewbus@cluster0.hqlunly.mongodb.net/?retryWrites=true&w=majority",
  );
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const unicornSchema = new mongoose.Schema({
  name: String,
});
const Unicorn = mongoose.model("unicorn", unicornSchema);

app.get("/unicorns", async (req, res) => {
  try {
    const queryToPassDonwToDb = {};
    if (req.query.name) {
      queryToPassDonwToDb["name"] = req.query.name;
    }
    if (req.query.loves) {
      queryToPassDonwToDb["loves"] = { $in: req.query.loves.split(",") };
    }
    console.log(queryToPassDonwToDb);
    const result = await Unicorn.find(queryToPassDonwToDb);
    res.json(result);
    console.log(result);
  } catch (err) {
    console.log(err);
    res.status(540).json({ error: "Something went wrong" + String(err) });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
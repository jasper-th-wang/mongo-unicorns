const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
}

app.use(express.static(path.join(__dirname, "frontend/")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "frontend/", "index.html"));
});

// Validation condition everytime you want to update or insert a unicorn
const unicornSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  weight: {
    type: Number,
    min: 0,
    max: 1000,
    required: true,
  },
  loves: [String],
  gender: String,
  dob: Date,
  vaccinated: {
    type: Boolean,
    required: false,
  },
  vampires: Number,
});
const Unicorn = mongoose.model("unicorn", unicornSchema);

function createQueryObject(inputQuery) {
  const queryObject = {};

  if (inputQuery.name) queryObject["name"] = inputQuery.name;
  if (inputQuery.dob) queryObject["dob"] = { $gte: inputQuery.dob };
  if (inputQuery.loves)
    queryObject["loves"] = { $in: inputQuery.loves.split(",") };
  if (inputQuery.weight) queryObject["weight"] = { $gte: inputQuery.weight };
  if (inputQuery.gender) queryObject["gender"] = inputQuery.gender;
  if (inputQuery.vaccinated)
    queryObject["vaccinated"] = { $exists: inputQuery.vaccinated === "true" };
  if (inputQuery.vampires)
    queryObject["vampires"] = { $gte: inputQuery.vampires };

  return queryObject;
}

function createSortObject(sortQuery) {
  if (!sortQuery) {
    return {};
  }
  const splitQuery = sortQuery.split(",").map((sortScheme) => {
    const sortPair = sortScheme.split(".");
    sortPair[1] = parseInt(sortPair[1]);
    return sortPair;
  });
  return Object.fromEntries(splitQuery);
}

app.get("/unicorns", async (req, res) => {
  try {
    const queryObject = createQueryObject(req.query);
    const sortObject = createSortObject(req.query.sort);
    const result = await Unicorn.find(queryObject).sort(sortObject);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(540).json({ error: "Something went wrong" + String(err) });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 200 -> OK
// 400 error -> client side
// 500 error -> server error

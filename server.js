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
}

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
    queryObject["vaccinated"] = inputQuery.vaccinated === "true";
  if (inputQuery.vampires)
    queryObject["vampires"] = { $gte: inputQuery.vampires };

  return queryObject;
}

app.get("/unicorns", async (req, res) => {
  try {
    const queryObject = createQueryObject(req.query);
    console.log(queryObject);
    const result = await Unicorn.find(queryObject);
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

// 200 -> OK
// 400 error -> client side
// 500 error -> server error

const RowTemplate = document.getElementById("tableRowTemplate");
const tableBody = document.getElementById("tableBody");
const inputRefs = {
  name: document.getElementById("grid-name"),
  dob: document.getElementById("grid-dob"),
  loves: document.getElementById("grid-loves"),
  weight: document.getElementById("grid-weight-great-than"),
  gender: document.getElementById("grid-gender"),
  vampires: document.getElementById("grid-vampire-greater-than"),
  vaccinated: document.getElementById("grid-vaccinated"),
};

async function getUnicorns() {
  const queryObject = new URLSearchParams();

  for (const inputField in inputRefs) {
    let inputValue = inputRefs[inputField].value;
    if (inputValue) queryObject.append(inputField, inputValue);
  }

  const queryString = queryObject.toString();
  const response = await fetch(`http://localhost:3000/unicorns?${queryString}`);
  return response.json();
}

function renderEachUnicornRow(unicornDoc) {
  const newRow = RowTemplate.content.cloneNode(true);
  newRow.querySelector(".unicorn-name").innerHTML = unicornDoc.name;
  newRow.querySelector(".unicorn-dob").innerHTML = unicornDoc.dob.split("T")[0];
  newRow.querySelector(".unicorn-loves").innerHTML = unicornDoc.loves;
  newRow.querySelector(".unicorn-weight").innerHTML = unicornDoc.weight;
  newRow.querySelector(".unicorn-gender").innerHTML = unicornDoc.gender;
  newRow.querySelector(".unicorn-vampires").innerHTML =
    unicornDoc.vampires || 0;
  newRow.querySelector(".unicorn-vaccinated").innerHTML = Boolean(
    unicornDoc.vaccinated,
  );
  tableBody.append(newRow);
}

function renderUnicornTable(queryResults) {
  tableBody.innerHTML = "";
  for (const unicorn of queryResults) {
    renderEachUnicornRow(unicorn);
  }
}

document.getElementById("form-btn").addEventListener("click", async (e) => {
  e.preventDefault();
  const results = await getUnicorns();
  console.log(results);
  renderUnicornTable(results);
});

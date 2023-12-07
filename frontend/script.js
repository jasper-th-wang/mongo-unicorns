const nameElement = document.getElementById("grid-name");
const dobElement = document.getElementById("grid-dob");
const lovesElement = document.getElementById("grid-loves");
const weightElement = document.getElementById("grid-weight-great-than");
const genderElement = document.getElementById("grid-gender");
const vampireElement = document.getElementById("grid-vampire-greater-than");
const vaccinatedElement = document.getElementById("grid-vaccinated");

console.log(Boolean(nameElement));
const inputRefs = {
  name: nameElement,
  dob: dobElement,
  loves: lovesElement,
  weight: weightElement,
  gender: genderElement,
  vampire: vampireElement,
  vaccinated: vaccinatedElement,
};

function getUnicorns() {
  const queryObject = new URLSearchParams();
  for (const inputField in inputRefs) {
    let inputValue = inputRefs[inputField].value;
    if (inputValue) queryObject.append(inputField, inputValue);
  }

  const queryString = queryObject.toString();
  console.log(queryString);
  fetch(`http://localhost:3000/unicorns?${queryString}`)
    .then((res) => res.json())
    .then((res) => console.log(res));
}

document.getElementById("form-btn").addEventListener("click", (e) => {
  e.preventDefault();
  getUnicorns();
});

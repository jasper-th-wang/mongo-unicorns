const tableStyleSheet = document.getElementById("tableStyles");
const RowTemplate = document.getElementById("tableRowTemplate");
const tableBody = document.getElementById("tableBody");
const sortErrorText = document.getElementById("sort-error");
const inputRefs = {
  name: document.getElementById("grid-name"),
  dob: document.getElementById("grid-dob"),
  loves: document.getElementById("grid-loves"),
  weight: document.getElementById("grid-weight-great-than"),
  gender: document.getElementById("grid-gender"),
  vampires: document.getElementById("grid-vampire-greater-than"),
  vaccinated: document.getElementById("grid-vaccinated"),
  sort: document.getElementById("grid-sort"),
};

const checkboxRefs = {
  name: document.getElementById("name-checkbox"),
  dob: document.getElementById("dob-checkbox"),
  loves: document.getElementById("loves-checkbox"),
  weight: document.getElementById("weight-checkbox"),
  gender: document.getElementById("gender-checkbox"),
  vampires: document.getElementById("vampires-checkbox"),
  vaccinated: document.getElementById("vaccinated-checkbox"),
};

const columnClassName = {
  name: ".unicorn-name",
  dob: ".unicorn-dob",
  loves: ".unicorn-loves",
  weight: ".unicorn-weight",
  gender: ".unicorn-gender",
  vampires: ".unicorn-vampires",
  vaccinated: ".unicorn-vaccinated",
};

const validWords = [
  "gender",
  "dob",
  "weight",
  "loves",
  "vampires",
  "vaccinated",
  "name",
];

/**
 * Fetches unicorns from a local server based on input field values.
 *
 * @returns {Promise<Object>} A promise that resolves with the JSON response from the server.
 */
async function getUnicorns() {
  const queryObject = new URLSearchParams();

  for (const inputField in inputRefs) {
    let inputValue = inputRefs[inputField].value;
    if (inputField === "sort") {
      inputValue = sanitizeProcessSortInput(inputValue);
    }
    if (inputValue) queryObject.append(inputField, inputValue);
  }

  const queryString = queryObject.toString();

  const response = await fetch(
    `http://localhost:${environment.PORT || 3000}/unicorns?${queryString}`,
  );
  return response.json();
}

/**
 * Renders a row for each unicorn in a table.
 *
 * @param {Object} unicornDoc - The unicorn data.
 */
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

/**
 * Renders a table with unicorn data.
 *
 * @param {Array} queryResults - The results from a unicorn query.
 */
function renderUnicornTable(queryResults) {
  tableBody.innerHTML = "";
  for (const unicorn of queryResults) {
    renderEachUnicornRow(unicorn);
  }
}

/**
 * Updates the visibility of table columns based on checkbox states.
 */
function updateTableVisibility() {
  for (const checkboxName in checkboxRefs) {
    const isChecked = checkboxRefs[checkboxName].checked;
    const columnStyle = `
      ${columnClassName[checkboxName]} {
        display: ${isChecked ? "table-cell" : "none"};
      }
    `;
    tableStyleSheet.insertAdjacentHTML("beforeend", columnStyle);
  }
}

/**
 * Handles checkbox changes and updates table visibility accordingly.
 */
function handleCheckbox() {
  tableStyleSheet.innerHTML = "";
  updateTableVisibility();
}

/**
 * Sanitizes and validates the sort input string.
 *
 * @param {string} inputStr - The input string to sanitize.
 * @returns {string} The sanitized input string if valid, otherwise an empty string.
 */
function sanitizeProcessSortInput(inputStr) {
  if (!inputStr) return "";
  const isValid = validateSortStr(inputStr);
  sortErrorText.style.display = isValid ? "none" : "inline-block";
  return isValid ? inputStr : "";
}

/**
 * Validates the sort string syntax and checks if all words are valid.
 *
 * @param {string} sortStr - The sort string to validate.
 * @returns {boolean} True if the sort string is valid, otherwise false.
 */
function validateSortStr(sortStr) {
  if (!sortStr) {
    return false;
  }
  // Check if input syntax is correct (should be formatted as "weight.1,vampires.-1"...etc.)
  const syntaxCheckRegex = new RegExp(/[a-z]*\.-?1,?/g);
  const wordRegex = new RegExp(/[a-z]+/g);

  const matchedSortStr = Array.from(sortStr.matchAll(syntaxCheckRegex)).join(
    "",
  );
  if (!(matchedSortStr.length === sortStr.length)) {
    return false;
  }
  // check if all words in the sortStr are valid words
  const wordsInSortStr = Array.from(sortStr.match(wordRegex));
  return wordsInSortStr.every((word) => validWords.includes(word));
}

function main() {
  updateTableVisibility();

  document.getElementById("form-btn").addEventListener("click", async (e) => {
    e.preventDefault();
    const formResults = await getUnicorns();
    renderUnicornTable(formResults);
  });

  for (const checkboxName in checkboxRefs) {
    checkboxRefs[checkboxName].addEventListener("click", () => {
      handleCheckbox();
    });
  }
}

main();

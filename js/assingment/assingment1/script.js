const addBtn = document.getElementById("add-btn");
const nameInput = document.getElementById("item-name-input");
const priceInput = document.getElementById("item-price-input");
const tableBody = document.getElementById("item-table-body");
const errorMsg = document.getElementById("error-message");
const grandTotalCell = document.querySelector("[data-ns-test='grandTotal']");

let grandTotal = 0;

addBtn.addEventListener("click", () => {
  const itemName = nameInput.value.trim();
  const itemPrice = priceInput.value.trim();

  if (itemName === "" || itemPrice === "") {
    showError("Please enter both name and price.");
    return;
  }

  if (isNaN(itemPrice) || Number(itemPrice) <= 0) {
    showError("Please enter a valid numeric price greater than 0.");
    return;
  }

  errorMsg.textContent = "";

  const newRow = document.createElement("tr");
  const nameCell = document.createElement("td");

  nameCell.textContent = itemName;
  nameCell.setAttribute("data-ns-test", "item-name");

  priceCell.textContent = Number(itemPrice).toFixed(2);

  newRow.appendChild(nameCell);
  newRow.appendChild(priceCell);

  tableBody.insertBefore(newRow, tableBody.lastElementChild);

  grandTotal += Number(itemPrice);
  grandTotalCell.textContent = grandTotal.toFixed(2);

  nameInput.value = "";
  priceInput.value = "";
});

function showError(message) {
  errorMsg.textContent = message;
}

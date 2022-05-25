// formulaire relatif aux incomes
const incomeForm = document.querySelector("#incomeForm");
const amount = document.querySelector("#amount");

incomeForm.onsubmit = function (event) {
  event.preventDefault();
  const addedIncome = document.createElement("li");
  addedIncome.innerHTML = income.value;
  incomes.appendChild(addedIncome);
  income.value = "";
};

// formulaire relatif au loyer
const rentExpensesForm = document.querySelector("#rentExpensesForm");
const rentPrice = document.querySelector("#rentPrice");

let rentExpense = [];

rentExpensesForm.onsubmit = function (event) {
  event.preventDefault();
  const addedRentExpense = document.createElement("li");
  addedRentExpense.innerHTML = rentPrice.value;
  rentExpenses.appendChild(addedRentExpense);
  rentExpense.push(rentPrice.value);
  rentPrice.value = "";
  document.getElementById("totalRentExpense").value = rentExpense;
};

// formulaire relatif aux dépenses de nourriture
const foodExpensesForm = document.querySelector("#foodExpensesForm");
const foodPrice = document.querySelector("#foodPrice");

let totalFoodExpenses = [];
let sumFood = 0;

foodExpensesForm.onsubmit = function (event) {
  event.preventDefault();
  const addedFoodExpense = document.createElement("li");
  addedFoodExpense.innerHTML = foodPrice.value;
  foodExpenses.appendChild(addedFoodExpense);
  totalFoodExpenses.push(foodPrice.value);
  sumFood += parseInt(foodPrice.value);
  foodPrice.value = "";
  document.getElementById("totalFoodExpenses").value = sumFood;
};

// formulaire relatif aux autres dépenses
const otherExpensesForm = document.querySelector("#otherExpensesForm");
const otherPrice = document.querySelector("#otherPrice");

let totalOtherExpenses = [];
let sumOther = 0;

otherExpensesForm.onsubmit = function (event) {
  event.preventDefault();
  const addedOtherExpense = document.createElement("li");
  addedOtherExpense.innerHTML = otherPrice.value;
  otherExpenses.appendChild(addedOtherExpense);
  sumOther += parseInt(otherPrice.value);
  otherPrice.value = "";
  document.getElementById("totalOtherExpenses").value = sumOther;
};

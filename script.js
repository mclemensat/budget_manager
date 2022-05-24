const incomeForm = document.querySelector("#incomeForm");
const amount = document.querySelector("#amount");

incomeForm.onsubmit = function (event) {
  event.preventDefault();
  const addedIncome = document.createElement("li");
  addedIncome.innerHTML = income.value;
  incomes.appendChild(addedIncome);
  income.value = "";
};

const rentExpensesForm = document.querySelector("#rentExpensesForm");
const rentPrice = document.querySelector("#rentPrice");

rentExpensesForm.onsubmit = function (event) {
  event.preventDefault();
  const addedRentExpense = document.createElement("li");
  addedRentExpense.innerHTML = rentPrice.value;
  rentExpenses.appendChild(addedRentExpense);
  rentPrice.value = "";
};

const foodExpensesForm = document.querySelector("#foodExpensesForm");
const foodPrice = document.querySelector("#foodPrice");

foodExpensesForm.onsubmit = function (event) {
  event.preventDefault();
  const addedFoodExpense = document.createElement("li");
  addedFoodExpense.innerHTML = foodPrice.value;
  foodExpenses.appendChild(addedFoodExpense);
  foodPrice.value = "";
};
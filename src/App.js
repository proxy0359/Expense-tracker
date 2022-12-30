import React, { useState } from "react";
import ExpensesFilter from "./components/Expenses/ExpenseFilter";
import "./components/Expenses/ExpenseItem.css";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense";
function App(props) {
  return (
    <div>
      <Expenses />
    </div>
  );
}

export default App;
